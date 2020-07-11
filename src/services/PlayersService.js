import store from '../store';

export default {
    getPlayers(payload) {
        return store.dispatch('Data/Players/getPlayers', payload);
    },
}