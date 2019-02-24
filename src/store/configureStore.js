import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import eventsReducer from "../reducers/events";

export default () => {
    const store = createStore(
        combineReducers({
            eventData: eventsReducer
        }),
        applyMiddleware(thunk)
    );
    return store;
};