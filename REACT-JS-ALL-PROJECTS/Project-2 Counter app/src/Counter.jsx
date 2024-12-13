import React, { Component } from 'react';
import './Counter.css'; 

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count : this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count : this.state.count - 1 });
  };

  reset = () => {
    this.setState({ count : 0 });
  };

  render() {
    return (
     <div className="box">
       <div className="counter" align="center">
        <h1>Counter App</h1>
        <div className="counter-inc">
          <button className="button" onClick={this.increment}>+</button>
          <div className="counter-dec">{this.state.count}</div>
          <button className="button" onClick={this.decrement}>-</button>
        </div>
        <button className="reset-button" onClick={this.reset}>Reset</button>
      </div>
     </div>
    );
  }
}

export default Counter;
