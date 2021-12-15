import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-amenities',
  templateUrl: './amenities.component.html',
  styleUrls: ['./amenities.component.css']
})
export class AmenitiesComponent implements OnInit {
   @Input() imageUrl = '';
  @Input() content = '';

  constructor() { }

  ngOnInit(): void {
  }

}
