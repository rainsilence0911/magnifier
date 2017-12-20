import {
    Component,
    Inject
} from '@angular/core';

import { AppState } from '../app-state';
import { AppStore } from '../app-store';
import { Store } from 'redux';
import { ConfigImageItem } from '../config-item';

@Component({
    selector: 'picture-displayer',
    templateUrl: './picture-displayer.component.html',
    styleUrls: ['./picture-displayer.component.css']
})
export class PictureDisplayerComponent {

    selectedImage: string;

    constructor(@Inject(AppStore) private store: Store<AppState>) {
        store.subscribe(()=>this.onStateChange());
    }

    onStateChange() {
        let state: AppState = this.store.getState() as AppState;
        let imageItem = state.selectedImage as ConfigImageItem;
        this.selectedImage = imageItem.path;
    }
}
