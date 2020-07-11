import _ from 'lodash';

const consts = {
    SERVICES: {
        GETCLUBS: { FUNCTION: 'getClubs', PATH: 'services/ClubService.js' },
    }
}

_.forEach(consts, (item, idx) => {
    consts[idx] = Object.freeze(consts[idx]);
});

export default consts;