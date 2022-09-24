import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../Services/food/food.service';
import { Food } from '../shared/modules/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods:Food[] = [];
  constructor(private foodService:FoodService , private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      if(params['searchTerm'])
      this.foods = this.foodService.getAllFoodBySearch(params['searchTerm']);
      else if (params['tag'])
      this.foods = this.foodService.getAllFoodByTag(params['tag']);
      else
        this.foods = this.foodService.getAll();
    })
  }

}
