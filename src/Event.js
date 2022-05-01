import React, { Component } from "react";
import { Card, Button, CardGroup } from "react-bootstrap";

class Event extends Component {
  state = {
    event: {},
    collapsed: true,
  };

  handleClick = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { event } = this.props;
    const { collapsed } = this.state;
    return (
      <div className="event">
        <CardGroup>
          <Card className="event-card">
            <Card.Body>
              <Card.Title className="summary">{event.summary}</Card.Title>
              <Card.Subtitle className="start-date">
                {event.start.dateTime} ({event.start.timeZone})
              </Card.Subtitle>
              <Card.Subtitle className="location">
                @{event.summary} | {event.location}
              </Card.Subtitle>

              <Button
                variant="outline-info"
                className={`details-button ${
                  collapsed ? "show" : "hide"
                }-details`}
                onClick={this.handleClick}
              >
                {collapsed ? "Show Details" : "Hide Details"}
              </Button>

              {!collapsed && (
                <div
                  className={`extra-details ${
                    this.state.collapsed ? "hide" : "show"
                  }`}
                >
                  <Card.Title className="card-title">
                    About the event:
                  </Card.Title>
                  <a
                    className="event-link"
                    href={event.htmlLink}
                    rel="noreferrer"
                    target="_blank"
                  >
                    See details on Google Calendar
                  </a>
                  <p className="event-description">{event.description}</p>
                </div>
              )}
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    );
  }
}

export default Event;
