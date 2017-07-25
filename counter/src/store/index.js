import Vue from 'vue';
import Vuex from 'vuex';

import OperationPanel from './modules/OperationPanel';
import SummaryPanel from './modules/SummaryPanel';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        OperationPanel,
        SummaryPanel
    },
    strict: debug
});
