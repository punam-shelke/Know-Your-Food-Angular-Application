import { Component, OnInit } from '@angular/core';
import { IReceipe } from './receipes';
import { FoodDataService } from './food-data.service';
@Component({
  selector: 'app-receipe',
  templateUrl: './receipe.component.html',
  styleUrls: ['./receipe.component.css']
})
export class ReceipeComponent implements OnInit {
  pageTitle: string = 'Food Hunt';
  imageWidth: number = 70;
  imageMargin: number = 2;
  displayimage: boolean = false;
  _searchText: string;
  error: string;
  get searchText(): string {
    return this._searchText;
  }
  set searchText(s: string) {
    this._searchText = s;
    this.filtered = this._searchText ? this.filterData(this._searchText) : this.receipes;
  }
  filtered: IReceipe[];
  receipes: IReceipe[] = [];
  constructor(private receipesData: FoodDataService) {
  }

  ngOnInit(): void {
    this.receipesData.getDetails().subscribe({
      next: receipe => {
        this.receipes = receipe;
        this.filtered = this.receipes;
      },
      error: err => this.error = err.message
    }
    );

  }

  controlImage(): void {
    this.displayimage = !this.displayimage;
  }
  filterData(text: string): IReceipe[] {
    return this.receipes.filter((data: IReceipe) => data.title.toLowerCase().indexOf(text.toLowerCase()) !== -1);
  }
  replyEvent(message: string): void {
    this.pageTitle = "food" + message;
  }
}
