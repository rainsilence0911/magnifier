import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { PictureDisplayerComponent } from './picture-displayer/picture-displayer.component';
import { PictureSelectorComponent } from './picture-selector/picture-selector.component';
import { MagnifierComponent } from './magnifier/magnifier.component';

import {
    createStore,
    Store,
    applyMiddleware
} from 'redux';

import thunk from 'redux-thunk';
import { AppStore } from './app-store';
import { AppState } from './app-state';
import magnifierReducer from './reducer/magnifier.reducer';

let store: Store<AppState> = createStore<AppState>(
    magnifierReducer,
    applyMiddleware(thunk)
);

@NgModule({
    declarations: [
        AppComponent,
        ControlPanelComponent,
        PictureDisplayerComponent,
        PictureSelectorComponent,
        MagnifierComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [
        {provide: AppStore, useValue: store }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
