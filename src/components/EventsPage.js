import React from 'react';
import EventList from './EventList';
import EventPager from './EventPager';

const EventsPage = () => (
    <div>
        <EventPager />
        <EventList />
    </div>
);

export default EventsPage;