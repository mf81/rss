import React, { Component } from "react";
import Counter from "./counterComponent";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 1, selected: true },
      { id: 2, value: 10, selected: false },
      { id: 3, value: 0, selected: false },
      { id: 4, value: 0, selected: false }
    ]
  };

  handleReset = () => {
    const counters = this.state.counters.map(f => {
      f.value = 0;
      return f;
    });
    this.setState({ counters });
  };

  handleInc = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = idComponent => {
    const counters = this.state.counters.filter(f => f.id !== idComponent);
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-danger btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map(m => (
          <Counter
            key={m.id}
            counter={m}
            onInc={this.handleInc}
            onDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
