import * as ActionTypes from './magnifier.action-types';
import { AppState } from '../app-state';

let initalState: AppState = {
    selectedImage: null,
    imageResources: []
};

export default (state = initalState, action) => {

    switch (action.type) {
        case ActionTypes.PICTURE_CHANGED:
            return {
                selectedImage: state.imageResources[action.value],
                imageResources: state.imageResources
            };
        case ActionTypes.PANEL_INIT:
            let imageResources = action.value;
            return {
                selectedImage: imageResources[0],
                imageResources: imageResources
            };
        default:
            return state;
    }
}