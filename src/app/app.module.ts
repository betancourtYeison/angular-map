import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "./material.module";

import { AgmCoreModule } from "@agm/core";

import { AppComponent } from "./app.component";
import { MapComponent } from "./components/map/map.component";
import { DialogEditMarkerComponent } from "./components/marker/dialog-edit-marker/dialog-edit-marker.component";

@NgModule({
  entryComponents: [DialogEditMarkerComponent],
  declarations: [AppComponent, MapComponent, DialogEditMarkerComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBxMOGB3bOhgov65xK0Fwdw-4HR2MjzXH0"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
