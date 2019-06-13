import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: '1',
      title: 'Carbonara',
      imageUrl: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1001491_11.jpg?itok=-ns0A_kt',
      ingredients: ['pasta', 'white sauce', 'bacon']
    },
    {
      id: '2',
      title: 'Spaghetti',
      imageUrl: 'https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg',
      ingredients: ['pasta', 'tomato sauce', 'meatballs']
    }
  ]
  constructor() { }

  getAllRecipes():Recipe[] {
    return [...this.recipes]
  }

  getRecipe(recipeId: string): Recipe {
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })}
  }

  deleteRecipe(recipeId:string){
    this.recipes = this.recipes.filter( recipe => {
      return recipe.id !== recipeId;
    });
  }  
}
