import {Component, OnInit} from '@angular/core';
import {WebSpeechApiService} from "./web-speech-api.service";
import {Logger} from "angular2-logger/core";

@Component({
             selector: 'webspeechapi',
             templateUrl: 'web-speech-api.component.html',
             styleUrls: ['web-speech-api.component.css']
           })
export class WebSpeechApiComponent implements OnInit {
  
  private isRecognizing: boolean = false;
  
  constructor(
    private logger: Logger,
    private webSpeechApiService: WebSpeechApiService) {
    
    this.webSpeechApiService.subscribeStartEventHandler(this, this.onStartEventHander);
    this.webSpeechApiService.subscribeEndEventHandler(this, this.onEndEventHander);
    this.webSpeechApiService.subscribeErrorEventHandler(this, this.onErrorEventHander);
    this.webSpeechApiService.subscribeResultEventHandler(this, this.onResultEventHander);
    
  }
  
  ngOnInit() {
    
  }
  
  start() {
    this.webSpeechApiService.start();
    this.isRecognizing = true;
  }
  
  stop() {
    this.webSpeechApiService.stop();
    this.isRecognizing = false;
  }
  
  onClickButton(event: Event): void {
    event.preventDefault();
    if(!this.isRecognizing) {
      this.start();
    } else {
      this.stop();
    }
  }
  
  onStartEventHander(event: Event): void {
    this.logger.log("start");
  }
  
  onEndEventHander(event: Event): void {
    this.logger.log("end");
  }
  
  onErrorEventHander(event: SpeechRecognitionError): void {
    this.logger.log("error");
  }
  
  onResultEventHander(event: SpeechRecognitionEvent): void {
    this.logger.log("result");
  }
}
