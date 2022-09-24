import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CartService } from '../Services/cart/cart.service';
import { FoodService } from '../Services/food/food.service';
import { Food } from '../shared/modules/food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
  food! : Food;
  constructor(private route: ActivatedRoute , private foodService: FoodService , private cartService:CartService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      if(params['id'])
      this.food = this.foodService.getFoodById(params['id']);
    })
  }
  addTocart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page')
  }
}
