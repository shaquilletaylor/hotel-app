import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navtabs',
  templateUrl: './navtabs.component.html',
  styleUrls: ['./navtabs.component.css']
})
export class NavtabsComponent implements OnInit {
  links = ['Home', 'Accommodations', 'Dining', 'Welless', 'Experiences', 'Offers'];
  activeLink = this.links[0];


  constructor() { }

  ngOnInit(): void {
  }

}
