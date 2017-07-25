import * as types from '../mutation-types';

const state = {
    summary: 0
};

const getters = {
    summary: state => state.summary
};

const mutations = {
    [types.ADD_COUNT] (state) {
        state.summary++;
    },
    [types.SUBTRACT_COUNT] (state) {
        state.summary--;
    }
};

export default {
  state,
  getters,
  mutations
};
