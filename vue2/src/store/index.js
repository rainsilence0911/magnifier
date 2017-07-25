import Vue from 'vue';
import Vuex from 'vuex';

import pictureBehavior from './modules/pictureBehavior';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        pictureBehavior
    },
    strict: debug
});
