import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    errorText: "",
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value < 1 || value > 32) {
      this.setState({
        errorText: "Select number from 1 to 32",
      });
    } else {
      this.setState({
        numberOfEvents: value,
        errorText: "",
      });
    }
  };

  render() {
    return (
      <div className="numberOfEvents">
        <div className="numberOfEventsAlert"></div>
        <input
          type="number"
          className="inputNumberOfEvents"
          onChange={this.handleInputChanged}
          value={this.state.numberOfEvents}
        />
        <ErrorAlert text={this.state.errorText} className="error" />
      </div>
    );
  }
}

export default NumberOfEvents;
