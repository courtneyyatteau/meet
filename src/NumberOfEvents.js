import React, { Component } from "react";
import { ErrorAlert, WarningAlert } from "./Alert";
import Form from "react-bootstrap/Form";

class NumberOfEvents extends Component {
  state = {
    eventsNumber: 32,
  };

  inputChanged = (event) => {
    if (event.target.value < 1 || event.target.value > 32) {
      this.setState({
        errorText: "Enter a number between 1 and 32.",
        eventsNumber: event.target.value,
        warningText: null,
      });
    } else if (event.target.value > 0) {
      this.setState({
        eventsNumber: event.target.value,
        warningText: null,
        errorText: null,
      });
    }
    this.props.updateEvents(undefined, event.target.value);
  };

  render() {
    return (
      <Form className="numberOfEventsStyle">
        {this.state.errorText && <ErrorAlert text={this.state.errorText} />}
        {this.state.warningText && (
          <WarningAlert
            className="errorMessage"
            text={this.state.warningText}
          />
        )}

        <label>Update Event Count: </label>
        <input
          type="number"
          className="numberOfEvents"
          placeholder={this.state.eventsNumber}
          onChange={this.inputChanged}
        ></input>
      </Form>
    );
  }
}
export default NumberOfEvents;
