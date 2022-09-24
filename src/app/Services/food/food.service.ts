import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/modules/food';
import { Tag } from 'src/app/shared/modules/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getFoodById(id:number):Food{
    return this.getAll().find(food => food.id == id)!;
  }
  getAllFoodByTag(tag:string ):Food[]{
    return tag == "All" ? this.getAll():this.getAll().filter(food => food.tags?.includes(tag));

  }
  getAllFoodBySearch(searchTerm:string){
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
  getAllTags():Tag[]{
    return[
      {
        name:'All',
        count:15
      },
      {
        name:'FastFood',
        count:11
      },
      {
        name:'Pizza',
        count:2
      },
      {
        name:'Lunch',
        count:8
      },
      {
        name:'SlowFood',
        count:4
      },
      {
        name:'Hamburger',
        count:1
      },
      {
        name:'Fry',
        count:1
      },
      {
        name:'Chicken',
        count:5
      }
    ];
  }
  getAll():Food[]{
    return[
     {
      id: 1,
      name: 'Pizza Pepperoni',
      cookTime: '10-20',
      price: 10,
      favorite: false,
      origins: ['italy'],
      stars: 4.5,
      imageUrl: '/assets/images/foods/food-1.jpg',
      tags: ['FastFood', 'Pizza', 'Lunch'],
    },
    {
      id: 2,
      name: 'Meatball',
      price: 20,
      cookTime: '20-30',
      favorite: true,
      origins: ['persia', 'middle east', 'china'],
      stars: 4.7,
      imageUrl: '/assets/images/foods/food-2.jpg',
      tags: ['SlowFood', 'Lunch'],
    },
    {
      id: 3,
      name: 'Hamburger',
      price: 5,
      cookTime: '10-15',
      favorite: false,
      origins: ['germany', 'us'],
      stars: 3.5,
      imageUrl: '/assets/images/foods/food-3.jpg',
      tags: ['FastFood', 'Hamburger'],
    },
    {
      id: 4,
      name: 'Fried Potatoes',
      price: 2,
      cookTime: '15-20',
      favorite: true,
      origins: ['belgium', 'france'],
      stars: 3.3,
      imageUrl: '/assets/images/foods/food-4.jpg',
      tags: ['FastFood', 'Fry'],
    },
    {
      id: 5,
      name: 'Chicken Soup',
      price: 11,
      cookTime: '40-50',
      favorite: false,
      origins: ['india', 'asia'],
      stars: 3.0,
      imageUrl: '/assets/images/foods/food-5.jpg',
      tags: ['SlowFood', 'Soup'],
    },
    {
      id: 6,
      name: 'Vegetables Pizza',
      price: 9,
      cookTime: '40-50',
      favorite: true,
      origins: ['italy'],
      stars: 4.0,
      imageUrl: '/assets/images/foods/food-6.jpg',
      tags: ['FastFood', 'Pizza', 'Lunch'],
    },
    {
      id:7,
      name: 'Chicken Sandwitch',
      price: 8,
      cookTime: '20-30',
      favorite: true,
      origins: ['amercia' , 'egypt'],
      stars: 4.0,
      imageUrl: '/assets/images/foods/food-7.jpg',
      tags: ['FastFood', 'Chicken', 'Lunch'],
    },

    {
      id:8,
      name: 'chicken Wings',
      price: 10,
      cookTime: '25-30',
      favorite: false,
      origins: ['amercia' ,'qatar'],
      stars: 4.0,
      imageUrl: '/assets/images/foods/food-8.jpg',
      tags: ['FastFood', 'Chicken', 'Lunch'],
    },
    {
      id:9,
      name: 'Pasta',
      price: 8,
      cookTime: '30-40',
      favorite: false,
      origins: ['italy' ],
      stars: 4.0,
      imageUrl: '/assets/images/foods/food-9.jpg',
      tags: ['FastFood', 'Pasta', 'Lunch'],
    },
    {
      id:10,
      name: 'Chech',
      price: 6,
      cookTime: '20-30',
      favorite: true,
      origins: ['amercia' , 'egypt'],
      stars: 4.0,
      imageUrl: '/assets/images/foods/food-10.jpg',
      tags: ['FastFood', 'Chicken', 'Lunch'],
    },
    {
      id:11,
      name: 'Meat Meal',
      price: 6,
      cookTime: '20-30',
      favorite: false,
      origins: ['amercia' , 'france'],
      stars: 4.0,
      imageUrl: '/assets/images/foods/food-11.jpg',
      tags: ['SlowFood', 'Meat', 'Lunch'],
    },

    {
      id:12,
      name: 'Potato',
      price: 4,
      cookTime: '20-30',
      favorite: false,
      origins: ['england' , 'egypt'],
      stars: 4.0,
      imageUrl: '/assets/images/foods/food-12.jpg',
      tags: ['FastFood', 'vegetable'],
    },
    {
      id:13,
      name: 'Burrito',
      price: 7,
      cookTime: '20-25',
      favorite: true,
      origins: ['syria' , 'egypt'],
      stars: 4.0,
      imageUrl: '/assets/images/foods/food-13.jpg',
      tags: ['FastFood', 'Chicken'],
    },
    {
      id:14,
      name: 'Chicken Ring',
      price: 8,
      cookTime: '30-40',
      favorite: false,
      origins: ['france' , 'egypt'],
      stars: 4.0,
      imageUrl: '/assets/images/foods/food-14.jpg',
      tags: ['FastFood', 'Chicken', 'Lunch'],
    },
    {
      id:15,
      name: 'Sushi Roll with Salmon',
      price: 10,
      cookTime: '40-50',
      favorite: false,
      origins: ['china' ],
      stars: 4.0,
      imageUrl: '/assets/images/foods/food-15.jpg',
      tags: ['SlowFood', 'Sushi'],
    },


    ]
  }
}
