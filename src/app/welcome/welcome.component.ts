import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  title: string = 'Welcome to ultimate receipe search!';
  imageObject: Array<object> = [{
    image: 'assets/pic1.jpg',
    thumbImage: 'assets/pic1.jpg'
  }, {
    image: 'assets/pic2.jpg',
    thumbImage: 'assets/pic2.jpg'
  },
  {
    image: 'assets/pic3.jpg',
    thumbImage: 'assets/pic3.jpg'
  }, {
    image: 'assets/pic4.jpg',
    thumbImage: 'assets/pic4.jpg'
  },
  {
    image: 'assets/pic5.jpg',
    thumbImage: 'assets/pic5.jpg'
  }, {
    image: 'assets/pic1.jpg',
    thumbImage: 'assets/pic1.jpg'
  }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
