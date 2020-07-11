/* eslint-disable no-empty-pattern */
import axios from 'axios';

export default {
    getClubs({ }, payload) {
        return axios
            .post("http://localhost:3333/api/club", payload)
            .then(response => response.data.clubs)
            .catch(err => console.log(err));
    },

};