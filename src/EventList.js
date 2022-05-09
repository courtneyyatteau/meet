import React, { Component } from "react";
import Event from "./Event";
import { Row, Col, Container } from "react-bootstrap";
import { WarningAlert } from "./Alert";

class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <Container className="eventlist-container">
        <Row className="d-flex justify-content-center event-list">
          {!navigator.onLine ? (
            <WarningAlert text="You are offline, the events list has been loaded from the Cache!" />
          ) : (
            ""
          )}
          <Col md={10} sm={12}>
            <ul className="EventList row">
              {events.map((event) => (
                <li
                  key={event.id}
                  className="col-xl-4 col-lg-4 col-md-8 col-sm-8 col-xs-12"
                >
                  <Event event={event} />
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EventList;
