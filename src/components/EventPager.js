import React from 'react';
import { connect } from 'react-redux';
import { startLoadEvents } from '../actions/events';

const EventPager = props => (
    <ul className="pagination">
        {props.previous && (
            <li className="page-item">
                <button className="page-link" onClick={() => props.loadEvents(props.previous)}>Previous</button>
            </li>
        )}
        {props.next && (
            <li className="page-item">
                <button className="page-link" onClick={() => props.loadEvents(props.next)}>Next</button>
            </li>
        )}
    </ul>
);

const mapStateToProps = state => {
    return {
        previous: state.eventData.previous,
        next: state.eventData.next
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadEvents: url => {
            dispatch(startLoadEvents(url));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventPager);