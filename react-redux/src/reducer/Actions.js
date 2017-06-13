import * as ActionTypes from './ActionTypes.js';

export const changeImage = (value) => {
    return {
        type: ActionTypes.PICTURE_CHANGED,
        value: value
    };
};