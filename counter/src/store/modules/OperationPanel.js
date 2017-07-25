import * as types from '../mutation-types';

const actions = {
    addCount ({ commit, state }) {
        commit(types.ADD_COUNT);
    },
    subtractCount ({ commit, state }) {
        commit(types.SUBTRACT_COUNT);
    }
};

export default {
    actions
};
