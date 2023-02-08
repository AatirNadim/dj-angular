import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Aatir, AatirList, Movie } from './aatir';

@Component({
  selector: 'app-aatir',
  templateUrl: './aatir.component.html',
  styleUrls: ['./aatir.component.css'],
})
export class AatirComponent {
  title = 'pilot-project';
  asls = ['asas', 'assa'];
  no_of_components: number = 10;

  room: Aatir = {
    name: 'Aatir',
    available: 10,
    booked: 0,
    total: 10,
  };

  tempList: AatirList[] = [
    {
      roomType: 'AatirRoom',
      amenities: 'Amenities',
      price: 1000,
      image: ['asas', 'assa'],
      checkIn: new Date(),
      checkOut: new Date(),
    },
    {
      roomType: 'SecRoom',
      amenities: 'SecAmenities',
      price: 3000,
      image: ['assssss', 'assa'],
      checkIn: new Date('11-12-2020'),
      checkOut: new Date('11-12-2021'),
    },
    {
      roomType: 'ThirdRoom',
      amenities: 'ThirdAmenities',
      price: 5000,
      image: ['asas', 'assa'],
      checkIn: new Date('11-12-2020'),
      checkOut: new Date('11-12-2021'),
    },
  ];

  movieList: Movie[] = [
    {
      title: 'Movie1',
      description: 'Movie1 Description',
      releaseDate: new Date('12-12-2020'),
      actors: 10,
    },
    {
      title: 'Movie2',
      description: 'Movie2 Description',
      releaseDate: new Date('1-12-2020'),
      actors: 10,
    },
    {
      title: 'Movie3',
      description: 'Movie3 Description',
      releaseDate: new Date('1-16-2020'),
      actors: 10,
    },
    {
      title: 'Movie4',
      description: 'Movie4 Description',
      releaseDate: new Date('4-12-2020'),
      actors: 10,
    },
  ];
  toggleState: boolean = false;
  // ngOnInit(): void {
  constructor() {
    console.log('AatirComponent constructor');
  }
  handleClick() {
    console.log('AatirComponent handleClick');
    this.no_of_components = this.no_of_components == 10 ? 20 : 10;
    this.toggleState = !this.toggleState;
  }
  handleChange(e: any): void {
    console.log(e);
  }
  handleSort() : void {
    // console.log(e);
    console.log('handleSort');  
    this.movieList = this.movieList.sort((a, b) => {
      return a.releaseDate.getTime() - b.releaseDate.getTime();
    })
  }
  // }
}
