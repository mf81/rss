import React, { Component } from "react";
import { getData } from "../fakeStaff/fakeData";
import { getGenres } from "../fakeStaff/fakeGenreService";
import Pagination from "./common/pagination";
import Genres from "./genresComponent";
import OnlyTable from "./onlyTableComponent";
import { paginate } from "./common/paginate";
import _ from "lodash";

class TableXXX extends Component {
  state = {
    data: [],
    genres: [],
    pageSize: 10,
    currentPage: 1,
    selectedGenres: { _id: "0", name: "Wszystkie" },
    sortColumn: { sortBy: "title", order: "asc" }
  };
  componentDidMount() {
    const genres = [{ _id: "0", name: "Wszystkie" }, ...getGenres()];
    this.setState({ data: getData(), genres });
  }

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

  handleGenres = genres => {
    console.log("OK Genres", genres);
    this.setState({ currentPage: 1, selectedGenres: genres });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  render() {
    const { length: count } = this.state.data;

    const filtred =
      this.state.selectedGenres && this.state.selectedGenres._id !== "0"
        ? this.state.data.filter(
            f => f.genres._id === this.state.selectedGenres._id
          )
        : this.state.data;

    const sorted = _.orderBy(
      filtred,
      [this.state.sortColumn.sortBy],
      [this.state.sortColumn.order]
    );

    const data = paginate(sorted, this.state.currentPage, this.state.pageSize);

    if (count === 0) {
      return <p>Brak filmów w bazie</p>;
    }
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-2 m-2">
            <Genres
              genres={this.state.genres}
              onGenres={this.handleGenres}
              selectedGenres={this.state.selectedGenres}
            />
          </div>
          <div className="col">
            <p>Ilość fimów w bazie to: {filtred.length}</p>
            <OnlyTable
              data={data}
              sortColumn={this.state.sortColumn}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />
          </div>
        </div>
        <div className="row">
          <Pagination
            itemsCount={filtred.length}
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
