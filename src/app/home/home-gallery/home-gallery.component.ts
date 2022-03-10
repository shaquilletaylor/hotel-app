import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-gallery',
  templateUrl: './home-gallery.component.html',
  styleUrls: ['./home-gallery.component.css']
})
export class HomeGalleryComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false, //turn on for mobile
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      500: {
        items: 2
      },
      600: {
        items: 2
      },
      768: {
        items: 3
      },
      876: {
        items: 3
      },
      900: {
        items: 4
      },
      940: {
        items: 4
      }
    },
    nav: true
  }


  constructor() { }

  ngOnInit(): void {
  }

}
