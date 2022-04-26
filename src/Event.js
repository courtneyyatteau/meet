import React, { Component } from "react";

class Event extends Component {
  constructor() {
    super();
    this.state = {
      collapsed: true,
    };
  }
  handleClick = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { event } = this.props;
    const { collapsed } = this.state;
    return (
      <div className="kind">
        <h1 className="summary">{event.summary}</h1>
        <div className="location">{event.location}</div>
        <button
          className={` ${collapsed ? "showDetails" : "hideDetails"}`}
          onClick={this.handleClick}
        >
          {collapsed ? "Show Details" : "Hide Details"}
        </button>
        {!collapsed && (
          <div>
            <h2>Description: {event.description}</h2>
            <p>Start Time: {event.start.dateTime}</p>
            <p>End Time: {event.end.dateTime}</p>
          </div>
        )}
      </div>
    );
  }
}
export default Event;
