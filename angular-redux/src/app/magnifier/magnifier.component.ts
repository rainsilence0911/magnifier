import {
    Component,
    ViewChild,
    ElementRef,
    Inject,
    AfterViewInit
} from '@angular/core';

import { AppState } from '../app-state';
import { AppStore } from '../app-store';
import { Store } from 'redux';

import DragManager from '../manager/drag.manager';

let MAGNIFIER_RADIUS = 190 / 2;

@Component({
    selector: 'magnifier',
    templateUrl: './magnifier.component.html',
    styleUrls: ['./magnifier.component.css']
})
export class MagnifierComponent implements AfterViewInit {

    @ViewChild("magnifierContainer", {read: ElementRef}) magnifierContainer: ElementRef;

    state: Object = {};

    constructor(@Inject(AppStore) private store: Store<AppState>) {
        store.subscribe(() => this.onStateChange());
    }

    onComponentDragMove(param) {
        this.calculatePosition(this.state, param.deltaX, param.deltaY);
    }

    onStateChange() {

        let state: AppState = this.store.getState() as AppState;
        let imageInfo = state.selectedImage;

        if (imageInfo == null) {
            return;
        }

        this.calculatePosition({
            containerPosition: {
                top: '0px',
                left: '0px'
            },
            verticalRatio: imageInfo.height / 768,
            horizontalRatio: imageInfo.width / 1024,
            actualImageUrl: imageInfo.path,
            actualImageHeight: imageInfo.height,
            actualImageWidth: imageInfo.width
        });
    }

    calculatePosition(state, deltaX = 0, deltaY = 0) {

        let containerPosition = state.containerPosition;
        let maxHeight = state.actualImageHeight - MAGNIFIER_RADIUS * 2;
        let maxWidth = state.actualImageWidth - MAGNIFIER_RADIUS * 2;

        let originY = parseFloat(containerPosition.top);
        let originX = parseFloat(containerPosition.left);

        let actualY = (MAGNIFIER_RADIUS + originY) * state.verticalRatio - MAGNIFIER_RADIUS;
        let actualX = (MAGNIFIER_RADIUS + originX) * state.horizontalRatio - MAGNIFIER_RADIUS;

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

        this.state = {
            containerPosition: {
                top: originY + (deltaY || 0) + 'px',
                left: originX + (deltaX || 0) + 'px'
            },
            imagePosition: {
                backgroundPosition: -actualX + 'px ' + -actualY + 'px',
                backgroundImage: state.actualImageUrl,
                backgroundSize: state.actualImageWidth + 'px ' + state.actualImageHeight + 'px'
            },
            verticalRatio: state.verticalRatio,
            horizontalRatio: state.horizontalRatio,
            actualImageHeight: state.actualImageHeight,
            actualImageWidth: state.actualImageWidth,
            actualImageUrl: state.actualImageUrl
        };
    }


    ngAfterViewInit() {
        DragManager.register(this.magnifierContainer.nativeElement, this.onComponentDragMove.bind(this));
    }

}
