import React, { Component } from "react";
import Counter from "./counterComponent";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-danger btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map(m => (
          <Counter
            key={m.id}
            counter={m}
            onInc={this.props.onInc}
            onDec={this.props.onDec}
            onDelete={this.props.onDelete}
            onReset={this.props.onReset}
            onLike={this.props.onLike}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
