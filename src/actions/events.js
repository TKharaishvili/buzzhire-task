import axios from 'axios';

const apiUrl = 'https://assessments.bzzhr.net/calendar/?format=json';

const loadEvents = result => ({
    type: 'LOAD_EVENTS',
    result
});

export const startLoadEvents = (url = apiUrl) => (dispatch) => {
    return axios.get(url).then(resp => {
        dispatch(loadEvents(resp.data));
    });
}