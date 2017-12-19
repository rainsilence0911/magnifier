import * as ActionTypes from './magnifier.action-types';

export const changeImage = (value) => {
    return {
        type: ActionTypes.PICTURE_CHANGED,
        value: value
    };
};