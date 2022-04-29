import React, { Component } from "react";

class NumberOfEvents extends Component {
  constructor() {
    super();
    this.state = {
      numberOfEvents: 32,
    };
  }
  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({
      numberOfEvents: value,
    });
  };

  render() {
    return (
      <div>
        <label>Number of Events: </label>
        <br />
        <input
          type="number"
          className="numOfEvents"
          value={this.props.numberOfEvents}
          onChange={this.handleInputChange}
        ></input>
      </div>
    );
  }
}

export default NumberOfEvents;
