import React from 'react';

const EventListItem = props => (
    <tr>
        <td>
            <span className="alert" style={{ background: props.category }}>
                {props.label}
            </span>
        </td>
        <td>
            {props.start}
        </td>
        <td>
            {props.end}
        </td>
    </tr>
);

export default EventListItem;