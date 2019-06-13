import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  constructor(private route: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    private alertController: AlertController) { }
  recipe: Recipe;
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (!params.has('recipeId')) {
        this.router.navigate(['./recipes']);
        return;
      }
      this.recipe = this.recipesService.getRecipe(params.get('recipeId'))
    })
  }

  deleteRecipe() {
    this.alertController.create({
      header: "Are You Sure",
      message: "Do you really want to delete the recipe?",
      buttons: [
        {
          text: "Cancel",
          role: "cancel"
        },
        {
          text: "Delete",
          handler: () => {
            this.recipesService.deleteRecipe(this.recipe.id);
            this.router.navigate(['./recipes'])
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present()
    })
  
  }

}
