import { Component, OnInit } from '@angular/core';
import { RecipesService } from './recipes.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  constructor(private recipesService:RecipesService) { }
  recipes:Recipe[];
  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
  }

}
