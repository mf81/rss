import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <span className={this.colorBadge()}>{this.formtCount()} </span>
          <button
            onClick={() => this.props.onInc(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            Increment
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn-danger btn-sm m-2"
          >
            Kasuj
          </button>
        </div>
      </React.Fragment>
    );
  }

  colorBadge() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formtCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
