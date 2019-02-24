import React from 'react';
import { connect } from 'react-redux';
import EventListItem from './EventListItem';

const EventList = (props) => (
    <table className="table table-bordered">
        <thead>
            <tr>
                <th>Label</th>
                <th>Start</th>                
                <th>End</th>
            </tr>
        </thead>
        <tbody>
            {props.events && props.events.map(event => (
                <EventListItem key={event.id} {...event} />
            ))}
        </tbody>
    </table>
);

const mapStateToProps = state => {
    return {
        events: state.eventData.results
    };
};

export default connect(mapStateToProps)(EventList);

