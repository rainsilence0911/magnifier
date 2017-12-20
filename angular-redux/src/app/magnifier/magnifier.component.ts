import {
    Component,
    ViewChild,
    ElementRef,
    AfterViewInit
} from '@angular/core';

import DragManager from '../manager/drag.manager';

@Component({
    selector: 'magnifier',
    templateUrl: './magnifier.component.html',
    styleUrls: ['./magnifier.component.css']
})
export class MagnifierComponent implements AfterViewInit {

    @ViewChild("magnifierContainer", {read: ElementRef}) magnifierContainer: ElementRef;

    constructor() { }

    onComponentDragMove(param) {
        console.log(this.magnifierContainer);
        //this.setState(this.calculatePosition(this.state, param.deltaX, param.deltaY));
    }

    ngAfterViewInit() {
        DragManager.register(this.magnifierContainer.nativeElement, this.onComponentDragMove.bind(this));
    }

}
