import { Component } from '@angular/core';
import { OnInit} from '@angular/core';
import { Aatir } from './aatir';

@Component({
  selector: 'app-aatir',
  templateUrl: './aatir.component.html',
  styleUrls: ['./aatir.component.css']
})
export class AatirComponent {
  title = 'pilot-project';
  asls = ['asas', 'assa']
  no_of_components : number = 10;

  room : Aatir = {
    name : 'Aatir',
    available : 10,
    booked : 0,
    total : 10
  }

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
    handleChange(e : any) : void {
      console.log(e)
    } 
  // }
}
