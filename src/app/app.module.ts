import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AirqualityComponent } from './components/airquality/airquality.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TemperatureComponent } from './components/temperature/temperature.component';
import { AudioComponent } from './components/audio/audio.component';
import { DisplaysComponent } from './components/displays/displays.component';
import { LightingComponent } from './components/lighting/lighting.component';

@NgModule({
  declarations: [
    AppComponent,
    AirqualityComponent,
    TemperatureComponent,
    AudioComponent,
    DisplaysComponent,
    LightingComponent
  ],
  imports: [
    BrowserModule,    
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
