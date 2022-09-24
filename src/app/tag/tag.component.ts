import { Component, OnInit ,Input } from '@angular/core';
import { FoodService } from '../Services/food/food.service';
import { Tag } from '../shared/modules/tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
  @Input()foodTagPage?:string[];
  tags?:Tag[];

  constructor(private foodService:FoodService) { }

  ngOnInit(): void {
    if(!this.foodTagPage)
    this.tags = this.foodService.getAllTags();
  }

}
