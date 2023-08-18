/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

export default class ClassCounter extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render(): React.ReactNode {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button type="button" onClick={this.increment}>
          Increment
        </button>
        <button type="button" onClick={this.decrement}>
          Decrement
        </button>
      </div>
    );
  }
}
