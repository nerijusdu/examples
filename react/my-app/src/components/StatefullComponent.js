import React from 'react';

class StatefullComponent extends React.Component {
  constructor(props) {
    super(props); // you just need this line, don't ask why

    this.state = { // initial state
      count: 0
    };
  }

  increment = () => {
    const newState = {
      count: this.state.count + 1
    };

    this.setState(newState);
  }

  render() {
    return (
      <div>
        <div>Current count: {this.state.count}</div>
        <button onClick={this.increment}>Click me!</button>
      </div>
    )
  }
}

export default StatefullComponent;
