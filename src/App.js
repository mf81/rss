import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/countersComponent";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 1, selected: true, liked: true },
      { id: 2, value: 10, selected: false, liked: true },
      { id: 3, value: 0, selected: false, liked: false },
      { id: 4, value: 0, selected: false, liked: false }
    ]
  };

  handleReset = () => {
    const counters = this.state.counters.map(f => {
      f.value = 0;
      f.liked = false;
      return f;
    });
    this.setState({ counters });
  };

  handleInc = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDec = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleDelete = idComponent => {
    const counters = this.state.counters.filter(f => f.id !== idComponent);
    this.setState({ counters });
  };

  handleLike = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].liked = !counters[index].liked;
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(f => f.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onInc={this.handleInc}
            onDec={this.handleDec}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
