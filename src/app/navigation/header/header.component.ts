import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleOpenSidenav() {
    this.toggleSidenav.emit();
  }

}
