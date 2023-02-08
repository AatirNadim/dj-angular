import { Component } from '@angular/core';
import { AatirComponent } from './aatir/aatir.component';


@Component({
  selector: 'app-root',
  templateUrl: './app1.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pilot-project';
  constructor() {
    console.log('AppComponent constructor called');
  }
}
