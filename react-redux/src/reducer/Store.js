import {createStore} from 'redux';
import reducer from './Reducer.js';

const initValues = {
    selectedImage: null
};

const store = createStore(reducer, initValues);

export default store;