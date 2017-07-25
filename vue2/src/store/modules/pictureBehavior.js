
import * as types from '../mutation-types';

const MAGNIFIER_RADIUS = 190 / 2;

const state = {
    images: [],
    selectedImage: {
        path: ''
    },
    containerPosition: {},
    imagePosition: {}
};

const getters = {
    selectedImage: (state) => {
        return {
            backgroundImage: state.selectedImage && state.selectedImage.path || ''
        };
    },
    containerPosition: state => state.containerPosition,
    imagePosition: state => state.imagePosition
};

const actions = {
    getAllImages ({ commit, state }, param) {
        commit(types.GET_ALL_IMAGES, param);
    },
    changeSelectImage ({ commit, state }, param) {
        commit(types.CHANGE_SELECT_IMAGE, param);
    },
    calculateMagnifierPosition ({ commit, state }, param) {
        commit(types.CALCULATE_MAGNIFIER_POSITION, param);
    }
};

function onSelectedImageChange (state) {
    var selectedImage = state.selectedImage;

    state.containerPosition = {
        top: '0px',
        left: '0px'
    };

    state.verticalRatio = selectedImage.height / 768;
    state.horizontalRatio = selectedImage.width / 1024;
    state.actualImageUrl = selectedImage.path;
    state.actualImageHeight = selectedImage.height;
    state.actualImageWidth = selectedImage.width;
}

function calculateMagnifierPosition (state, param) {
    var deltaX = param.deltaX;
    var deltaY = param.deltaY;
    var containerPosition = state.containerPosition;
    var maxHeight = state.actualImageHeight - MAGNIFIER_RADIUS * 2;
    var maxWidth = state.actualImageWidth - MAGNIFIER_RADIUS * 2;

    var originY = parseFloat(containerPosition.top);
    var originX = parseFloat(containerPosition.left);

    var actualY = (MAGNIFIER_RADIUS + originY) * state.verticalRatio - MAGNIFIER_RADIUS;
    var actualX = (MAGNIFIER_RADIUS + originX) * state.horizontalRatio - MAGNIFIER_RADIUS;

    if (actualY < -0.00001) {
        actualY = 0;
        originY = (actualY + MAGNIFIER_RADIUS) / state.verticalRatio - MAGNIFIER_RADIUS;
        deltaY = 0;
    } else if (actualY > maxHeight) {
        actualY = maxHeight;
        originY = (actualY + MAGNIFIER_RADIUS) / state.verticalRatio - MAGNIFIER_RADIUS;
        deltaY = 0;
    }

    if (actualX < -0.00001) {
        actualX = 0;
        originX = (actualX + MAGNIFIER_RADIUS) / state.horizontalRatio - MAGNIFIER_RADIUS;
        deltaX = 0;
    } else if (actualX > maxWidth) {
        actualX = maxWidth;
        originX = (actualX + MAGNIFIER_RADIUS) / state.horizontalRatio - MAGNIFIER_RADIUS;
        deltaX = 0;
    }

    state.containerPosition = {
        top: originY + (deltaY || 0) + 'px',
        left: originX + (deltaX || 0) + 'px'
    };

    state.imagePosition = {
        backgroundPosition: -actualX + 'px ' + -actualY + 'px',
        backgroundImage: state.actualImageUrl,
        backgroundSize: state.actualImageWidth + 'px ' + state.actualImageHeight + 'px'
    };
}

const mutations = {
    [types.GET_ALL_IMAGES] (state, param) {
        state.images = param;
        state.selectedImage = param[0];
        onSelectedImageChange(state);
        calculateMagnifierPosition(state, {});
    },
    [types.CHANGE_SELECT_IMAGE] (state, param) {
        state.selectedImage = state.images[param.index];
        onSelectedImageChange(state);
        calculateMagnifierPosition(state, {});
    },
    [types.CALCULATE_MAGNIFIER_POSITION]: calculateMagnifierPosition
};

export default {
    state,
    getters,
    actions,
    mutations
};
