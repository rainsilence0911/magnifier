
import React, { PropTypes } from 'react';
import {connect} from 'react-redux';

import * as Actions from '../reducer/Actions.js';

import styles from '../css/ControlPanel.css';

function PictureDisplayer({selectedImage}) {
    return (
        <div className={styles.magnifierBackground} style={{
            backgroundImage: selectedImage
        }}></div>
    );
}

function mapStateToProps(state, ownProps) {
    return {
        selectedImage: state.selectedImage && state.selectedImage.path
    };
}

export default connect(mapStateToProps)(PictureDisplayer);