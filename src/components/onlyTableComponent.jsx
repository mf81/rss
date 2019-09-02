import React, { Component } from "react";

class OnlyTable extends Component {
  riseSort = sort => {
    const sortColumn = { ...this.props.sortColumn };

    if (sortColumn.sortBy === sort) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.sortBy = sort;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  renderSortIcon = sortBy => {
    if (sortBy === this.props.sortColumn.sortBy) {
      if (this.props.sortColumn.order === "asc")
        return <i className="fa fa-sort-asc"></i>;
      else return <i className="fa fa-sort-desc"></i>;
    }
  };

  render() {
    const { data, onDelete } = this.props;

    return (
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => this.riseSort("author")}>
              Author {this.renderSortIcon("author")}
            </th>
            <th onClick={() => this.riseSort("title")}>
              Tytyuł
              {this.renderSortIcon("title")}
            </th>
            <th onClick={() => this.riseSort("year")}>
              Year
              {this.renderSortIcon("year")}
            </th>
            <th onClick={() => this.riseSort("rate")}>
              Rate
              {this.renderSortIcon("rate")}
            </th>
            <th onClick={() => this.riseSort("genres.name")}>
              Genres
              {this.renderSortIcon("genres.name")}
            </th>
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
              <td key={data.genres.name}>{data.genres.name}</td>
              <td>
                <button
                  onClick={() => onDelete(data)}
                  className="btn btn-danger btn-sm"
                >
                  Kasuj
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default OnlyTable;
