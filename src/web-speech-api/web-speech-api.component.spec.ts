/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WebSpeechApiComponent } from './web-speech-api.component';

describe('WebSpeechApiComponent', () => {
  let component: WebSpeechApiComponent;
  let fixture: ComponentFixture<WebSpeechApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebSpeechApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebSpeechApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
