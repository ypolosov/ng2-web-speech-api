import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WebSpeechApiComponent} from './web-speech-api.component';
import {WebSpeechApiService} from "./web-speech-api.service";
import {LOG_LOGGER_PROVIDERS} from "angular2-logger/core";

@NgModule({
            imports: [
              CommonModule
            ],
            exports: [WebSpeechApiComponent],
            declarations: [WebSpeechApiComponent],
            providers: [WebSpeechApiService, LOG_LOGGER_PROVIDERS]
          })
export class WebSpeechApiModule {
}
