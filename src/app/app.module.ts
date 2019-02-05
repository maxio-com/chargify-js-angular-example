import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChargifyFormComponent } from './chargify-form/chargify-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ChargifyFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
