import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredient } from 'src/app/models/ingredient.model';
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

  constructor(private recipeService: RecipeService,
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute) {
    this.recipe = new Recipe()
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const index = params['id']
      this.recipe = this.recipeService.getRecipe(index)
    })
  }

  addToShoppingList(): void {
    this.shoppingListService.addIngredients(this.recipe.ingredients)
  }
}
