import { Component } from '@angular/core';
import {Logger} from "angular2-logger/core";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  constructor(private logger: Logger){
    
  }
}
