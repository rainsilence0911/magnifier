import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { PictureDisplayerComponent } from './picture-displayer/picture-displayer.component';
import { PictureSelectorComponent } from './picture-selector/picture-selector.component';
import { MagnifierComponent } from './magnifier/magnifier.component';


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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
