import React, { Component } from 'react';
import Event from './Event';
import { Row, Col, Container } from 'react-bootstrap';
import { WarningAlert } from './Alert';

class EventList extends Component {
	render() {
		const { events } = this.props;
		return (
			<Container>
				<Row>
					{!navigator.onLine ? (
						<WarningAlert text="You are offline, the events list has been loaded from the Cache!" />
					) : (
						''
					)}
					<Col>
						<ul className="EventList">
							{events.map(event => (
								<li
									key={event.id}
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