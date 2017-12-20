import * as ActionTypes from './magnifier.action-types';
import ImageManager from '../manager/image.manager';

const changeImage = (value) => {
    return {
        type: ActionTypes.PICTURE_CHANGED,
        value: value
    };
};

const initPanel = () => {
    return dispatch => {
        ImageManager.load().then((config) => {
            dispatch({
                type: ActionTypes.PANEL_INIT,
                value: config
            });
        });
    };
};

export default {
    changeImage,
    initPanel
};