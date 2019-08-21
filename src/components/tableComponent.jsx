import React, { Component } from "react";
import { getData } from "../fakeStaff/fakeData";
class Counter extends Component {
  state = {
    data: getData()
  };

  handleDelete = dataNew => {
    const data = this.state.data.filter(f => f._id !== dataNew._id);
    this.setState({ data });
  };

  render() {
    const { length: count } = this.state.data;
    if (count === 0) {
      return <p>Brak filmów w bazie</p>;
    }
    return (
      <React.Fragment>
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
            {this.state.data.map(data => (
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
      </React.Fragment>
    );
  }
}

export default Counter;
