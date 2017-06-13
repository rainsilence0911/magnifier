import * as ActionTypes from './ActionTypes.js';

export default (state, action) => {

    switch (action.type) {
        case ActionTypes.PICTURE_CHANGED:
            return {
                selectedImage: action.value
            };
        default:
            return state;
    }
}