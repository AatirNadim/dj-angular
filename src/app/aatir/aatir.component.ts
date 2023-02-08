import { Component } from '@angular/core';
import { OnInit} from '@angular/core';
import { Aatir, AatirList } from './aatir';

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

  tempList : AatirList[] = [{
    roomType : 'AatirRoom',
    amenities : 'Amenities',
    price : 1000,
    image : ['asas', 'assa'],
    checkIn : new Date(),
    checkOut : new Date()
  },
  {
    roomType : 'SecRoom',
    amenities : 'SecAmenities',
    price : 3000,
    image : ['assssss', 'assa'],
    checkIn : new Date('11-12-2020'),
    checkOut : new Date('11-12-2021')
  },
  {
    roomType : 'ThirdRoom',
    amenities : 'ThirdAmenities',
    price : 5000,
    image : ['asas', 'assa'],
    checkIn : new Date('11-12-2020'),
    checkOut : new Date('11-12-2021')
  }


]

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
