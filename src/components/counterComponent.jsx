import React, { Component } from "react";
import Like from "./common/likeButton";

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-1">
            <span className={this.colorBadge()}>{this.formtCount()} </span>
          </div>
          <div className="col">
            <button
              onClick={() => this.props.onInc(this.props.counter)}
              className="btn btn-secondary btn-sm m-2"
            >
              +
            </button>
            <button
              onClick={() => this.props.onDec(this.props.counter)}
              className="btn btn-secondary btn-sm m-2"
              disabled={this.props.counter.value === 0 ? "disabled" : ""}
            >
              -
            </button>
            <button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn-danger btn-sm m-2"
            >
              Kasuj
            </button>
            <Like
              liked={this.props.counter.liked}
              onLike={() => this.props.onLike(this.props.counter)}
            />
          </div>
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
