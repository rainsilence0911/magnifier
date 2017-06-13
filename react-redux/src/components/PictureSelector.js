
import React, { PropTypes } from 'react';
import {connect} from 'react-redux';

import * as Actions from '../reducer/Actions.js';
import ImageLoader from '../manager/ImageLoader';

var imageResource, INITIAL_SELECTED_VALUE = "0";

function PictureSelector({onSelectChange}) {
    return (
        <div>Switch Picture:
            <select defaultValue={INITIAL_SELECTED_VALUE} onChange={onSelectChange}>
                <option value="0">A</option>
                <option value="1">B</option>
                <option value="2">C</option>
                <option value="3">D</option>
            </select>
        </div>
    );
}

PictureSelector.propTypes = {
    onSelectChange: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch, ownProps) {

    ImageLoader.init((param)=>{
        imageResource = param;
        dispatch(Actions.changeImage(imageResource[INITIAL_SELECTED_VALUE]));
    });

    return {
        onSelectChange: (e) => {
            dispatch(Actions.changeImage(imageResource[e.target.value]));
        }
    };
}


export default connect(null, mapDispatchToProps)(PictureSelector);