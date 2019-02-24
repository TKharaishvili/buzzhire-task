import axios from 'axios';

const apiUrl = 'https://assessments.bzzhr.net/calendar/?format=json';

const loadEvents = result => ({
    type: 'LOAD_EVENTS',
    result
});

export const startLoadEvents = () => (dispatch) => {
    return axios.get(apiUrl).then(resp => {
        dispatch(loadEvents(resp.data));
    });
}