import React from 'react';
import Magnifier from './Magnifier';
import ImageLoader from '../manager/ImageLoader';
import styles from '../css/App.css';

export default class App extends React.Component {
    constructor() {
        super();
        this.isDidMount = false;
        this.state = {};
        ImageLoader.init((param)=>{
            this.imageResource = param;
            if (this.isDidMount) {
                this.repaint();
            }
        });
    }

    onPictureChange(e) {
        this.repaint();
    }

    repaint() {
        this.setState({
            currentImage: this.imageResource[this.refs["picSelector"].value]
        });
    }

    componentDidMount() {
        this.isDidMount = true;
        if (this.imageResource) {
            this.repaint();
        }
    }

    render() {
        var imageUrl = this.state.currentImage && this.state.currentImage.path;
        return (
            <div className={styles.magnifierTable}>
                <div className={styles.magnifierCell}>
                    <div>Switch Picture:
                        <select ref="picSelector" defaultValue="0" onChange={this.onPictureChange.bind(this)}>
                            <option value="0">A</option>
                            <option value="1">B</option>
                            <option value="2">C</option>
                            <option value="3">D</option>
                        </select>
                    </div>
                    <div className={styles.magnifierContainer}>
                        <div className={styles.magnifierBackground} style={{
                            backgroundImage: imageUrl
                        }}></div>
                        <Magnifier imageInfo={this.state.currentImage}/>
                    </div>
                </div>
            </div>
        );
    }
}
