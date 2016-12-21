import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {WebSpeechApiModule} from "../web-speech-api";
import {LOG_LOGGER_PROVIDERS} from "angular2-logger/core";

@NgModule({
            declarations: [
              AppComponent
            ],
            imports: [
              BrowserModule,
              FormsModule,
              HttpModule,
              WebSpeechApiModule
            ],
            providers: [LOG_LOGGER_PROVIDERS],
            bootstrap: [AppComponent]
          })
export class AppModule {
}
