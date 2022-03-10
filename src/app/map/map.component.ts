import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() height = '';
  @Input() width = '';
  @Input() center = '';

  constructor() { }

  ngOnInit(): void {
  }

}
