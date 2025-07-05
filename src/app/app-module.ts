import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Shortepa } from './components/shortepa/shortepa';
import { USA } from './components/usa/usa';
import { INDIA } from './components/india/india';
import { UZB } from './components/uzb/uzb';
import { SWE } from './components/swe/swe';
import { SPAIN } from './components/spain/spain';
import { ARAB } from './components/arab/arab';
import { Shor } from './components/shor/shor';

@NgModule({
  declarations: [
    App,
    Shortepa,
    USA,
    INDIA,
    UZB,
    SWE,
    SPAIN,
    ARAB,
    Shor
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
