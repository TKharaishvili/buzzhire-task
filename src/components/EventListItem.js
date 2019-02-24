import React from 'react';
import moment from 'moment';

const EventListItem = props => (
    <tr>
        <td>
            <span className="alert" style={{ background: props.category }}>
                {props.label}
            </span>
        </td>
        <td>
            {moment(props.start).format('MMMM Do, YYYY HH:mm')}
        </td>
        <td>
            {moment(props.end).format('MMMM Do, YYYY HH:mm')}
        </td>
    </tr>
);

export default EventListItem;