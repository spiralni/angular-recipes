import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Recipe } from '../../../models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe
  index: number

  constructor(private recipeService: RecipeService,
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute) {
    this.recipe = new Recipe()
    this.index = 0
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.index = params['id']
      this.recipe = this.recipeService.getRecipe(this.index)
    })
  }

  addToShoppingList(): void {
    this.shoppingListService.addIngredients(this.recipe.ingredients)
  }
}
