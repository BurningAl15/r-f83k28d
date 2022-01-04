import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }

  add = () => {
    this.setState((prevState) => { return { counter: prevState.counter + 1 } })
  }

  render() {
    return (
      <div>
        <span className="value">{this.state.counter}</span>
        <button id="inc" onClick={() => { this.add() }}>Incrementa</button>
      </div>
    );
  }
}

export default App;
