import { Component, OnInit, OnChanges, SimpleChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit, OnChanges {
  @Input() rating: number;
  starWidth: number;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.starWidth = 75 * this.rating / 5;
  }
  @Output() ratingevent: EventEmitter<string> = new EventEmitter<string>();
  raiseEvent(): void {
    this.ratingevent.emit('rating is clicked');
  }
  ngOnInit(): void {
  }

}
