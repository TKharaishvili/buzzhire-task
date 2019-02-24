import React from 'react';
import { connect } from 'react-redux';

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
            {props.events && props.events.map(e => (
                <tr key={e.id} >
                    <td>
                        <span className="alert" style={{ background: e.category }}>
                            {e.label}
                        </span>
                    </td>
                    <td>
                        {e.start}
                    </td>
                    <td>
                        {e.end}
                    </td>
                </tr>
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

