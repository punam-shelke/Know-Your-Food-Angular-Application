import { Component, OnInit } from '@angular/core';
import { IReceipe } from '../receipe/receipes';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodDataService } from '../receipe/food-data.service';
@Component({
  selector: 'app-detail-receipe',
  templateUrl: './detail-receipe.component.html',
  styleUrls: ['./detail-receipe.component.css']
})
export class DetailReceipeComponent implements OnInit {
  title: string = 'Receipe details';
  receipe: IReceipe;
  errorMessage = '';
  constructor(private route: ActivatedRoute, private router: Router, private FoodDataService: FoodDataService) {

  }

  ngOnInit(): void {

    let param = +this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getProduct(id);
    }

    this.receipe = {
      "id": 547775,
      "title": "Creamy Avocado Pasta",
      "image": "https://spoonacular.com/recipeImages/547775-312x231.jpg",
      "imageType": "jpg"
    }
  }
  getProduct(id: number) {
    this.FoodDataService.getData(id).subscribe({
      next: receipe => this.receipe = receipe,
      error: err => this.errorMessage = err
    });
  }
  goBack(): void {
    this.router.navigate(['/receipe']);
  }
}