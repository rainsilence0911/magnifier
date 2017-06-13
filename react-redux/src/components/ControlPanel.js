import React, { PropTypes } from 'react';

import styles from '../css/ControlPanel.css';

import Magnifier from './Magnifier';
import PictureSelector from './PictureSelector';
import PictureDisplayer from './PictureDisplayer';

export default function ControlPanel() {
    return (
        <div className={styles.magnifierTable}>
            <div className={styles.magnifierCell}>
                <PictureSelector />
                <div className={styles.magnifierContainer}>
                    <PictureDisplayer/>
                    <Magnifier/>
                </div>
            </div>
        </div>
    );
}