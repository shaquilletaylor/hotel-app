import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

interface Location {
  value: string;
  viewValue: string;
}

interface Guests {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.css']
})
export class AccommodationComponent implements OnInit {
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });



  locationControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  locations: Location[] = [
    { value: 'Orlando, Florida', viewValue: 'Orlando, Florida' },
    { value: 'Palm Springs, California', viewValue: 'Palm Springs, California' },
    { value: 'Scottsdale, Arizona', viewValue: 'Scottsdale, Arizona' },
    { value: 'Maui, Hawaii', viewValue: 'Maui, hawaii' },
  ];

  guestControl = new FormControl('', Validators.required);
  guests: Guests[] = [
    { value: '1 room, 2 guests', viewValue: '1 room, 2 guests' },
    { value: '1 room, 4 guests', viewValue: '1 room, 4 guests' },
    { value: '2 rooms, 6 guests', viewValue: '2 rooms, 6 guests' },
    { value: '2 rooms, 8 guests', viewValue: '2 rooms, 8 guests' },
    { value: 'Other', viewValue: 'Other' },
    { value: 'Children', viewValue: 'Children' }
  ];

  

  constructor() {

  }

  ngOnInit(): void {
  }

}
