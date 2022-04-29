import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;

    if (value <= 0 || value > 32) {
      this.setState({
        numberOfEvents: "",
      });
    } else {
      this.setState({
        numberOfEvents: value,
      });
    }
    this.props.updateNumberOfEvents(value);
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <p className="numbercount">Number of events</p>
        <input
          type="number"
          className="numberinput"
          onChange={this.handleInputChanged}
          value={this.state.numberOfEvents}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
