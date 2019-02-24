const eventsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOAD_EVENTS':
            return action.result;
        default:
            return state;
    }
};

export default eventsReducer;