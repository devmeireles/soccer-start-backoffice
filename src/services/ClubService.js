import store from '../store';

export default {
    getClubs(payload) {
        return store.dispatch('Data/Clubs/getClubs', payload);
    },
}