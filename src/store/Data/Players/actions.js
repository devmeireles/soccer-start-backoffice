/* eslint-disable no-empty-pattern */
import axios from 'axios';

export default {
    getPlayers({ }, payload) {
        return axios
            .post("http://localhost:3333/api/player", payload)
            .then(response => response.data.players)
            .catch(err => console.log(err));
    },

};