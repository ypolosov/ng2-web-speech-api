/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WebSpeechApiService } from './web-speech-api.service';

describe('Service: WebSpeechApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebSpeechApiService]
    });
  });

  it('should ...', inject([WebSpeechApiService], (service: WebSpeechApiService) => {
    expect(service).toBeTruthy();
  }));
});
