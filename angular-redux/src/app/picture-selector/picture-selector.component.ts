import {
    Component,
    OnInit,
    Inject
} from '@angular/core';

import Actions from '../reducer/magnifier.actions';

import { AppState } from '../app-state';
import { AppStore } from '../app-store';
import { Store } from 'redux';

@Component({
    selector: 'picture-selector',
    templateUrl: './picture-selector.component.html',
    styleUrls: ['./picture-selector.component.css']
})
export class PictureSelectorComponent implements OnInit {

    imageList: Array<string>;

    constructor(@Inject(AppStore) private store: Store<AppState>) {
        store.subscribe(() => this.onStateChange());
    }

    ngOnInit() {
        this.store.dispatch(Actions.initPanel());
    }

    onSelectorChange(e) {
        this.store.dispatch(Actions.changeImage(e.target.value));
    }

    onStateChange() {
        let state: AppState = this.store.getState() as AppState;
        this.imageList = state.imageResources.map((image)=>{
            return image.name;
        });
    }

}
