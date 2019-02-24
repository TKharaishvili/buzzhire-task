import React from 'react';
import { connect } from 'react-redux';

const EventsPage = (props) => (
    <div>
        {props.next}
    </div>
);

const mapStateToProps = state => {
    return {
        next: state.eventData.next
    };
};

export default connect(mapStateToProps)(EventsPage);