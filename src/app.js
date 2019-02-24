import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';
import EventsPage from './components/EventsPage';
import configureStore from './store/configureStore';
import { startLoadEvents } from './actions/events';

const store = configureStore();
store.dispatch(startLoadEvents());

const App = (
    <Provider store={store}>
        <div>
            <Header />
            <EventsPage />
        </div>
    </Provider>
);

ReactDOM.render(App, document.getElementById('app'));