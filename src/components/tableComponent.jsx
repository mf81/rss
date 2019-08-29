import React, { Component } from "react";
import { getData } from "../fakeStaff/fakeData";
import { getGenres } from "../fakeStaff/fakeGenreService";
import Pagination from "./common/pagination";
import Genres from "./genresComponent";
import { paginate } from "./common/paginate";

class TableXXX extends Component {
  state = {
    data: getData(),
    genres: getGenres(),
    pageSize: 5,
    currentPage: 1
  };

  handleDelete = dataNew => {
    const data = this.state.data.filter(f => f._id !== dataNew._id);
    this.setState({ data });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
    console.log(page);
  };

  handlePriv = () => {
    const statePriv = this.state.currentPage - 1;
    this.setState({ currentPage: statePriv });
  };

  handelNext = () => {
    const stateNext = this.state.currentPage + 1;
    this.setState({ currentPage: stateNext });
  };

  handlePageSize = size => {
    this.setState({ currentPage: 1, pageSize: size });
  };

  render() {
    const { length: count } = this.state.data;

    const data = paginate(
      this.state.data,
      this.state.currentPage,
      this.state.pageSize
    );

    if (count === 0) {
      return <p>Brak filmów w bazie</p>;
    }
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-2 m-2">
            <Genres genres={this.state.genres} />
          </div>
          <div className="col">
            <p>Ilość fimów w bazie to: {count}</p>
            <table className="table">
              <thead>
                <tr>
                  <th>Author</th>
                  <th>Tytyuł</th>
                  <th>Year</th>
                  <th>Rate</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {data.map(data => (
                  <tr key={data._id}>
                    <td key={data.author}>{data.author}</td>
                    <td key={data.title}>{data.title}</td>
                    <td key={data.year}>{data.year}</td>
                    <td key={data.rate}>{data.rate}</td>
                    <td>
                      <button
                        onClick={() => this.handleDelete(data)}
                        className="btn btn-danger btn-sm"
                      >
                        Kasuj
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <Pagination
            itemsCount={this.state.data.length}
            pageSize={this.state.pageSize}
            onPageChange={this.handlePageChange}
            onPriv={this.handlePriv}
            onNext={this.handelNext}
            currentPage={this.state.currentPage}
            onPageSize={this.handlePageSize}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default TableXXX;
