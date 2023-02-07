import { Component } from '@angular/core';
import { OnInit} from '@angular/core';

@Component({
  selector: 'app-aatir',
  templateUrl: './aatir.component.html',
  styleUrls: ['./aatir.component.css']
})
export class AatirComponent {
  title = 'pilot-project';
  asls = ['asas', 'assa']
  no_of_components : number = 10;
  toggleState : boolean = false;
  // ngOnInit(): void {
    constructor() {
      console.log('AatirComponent constructor')
    }
    handleClick() {
      console.log('AatirComponent handleClick')
      this.no_of_components = (this.no_of_components == 10) ? 20 : 10;
      this.toggleState = !this.toggleState;
    }
  // }
}
