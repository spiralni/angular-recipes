import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Recipe 1", "This is recipe 1", "https://image.shutterstock.com/image-photo/blank-vintage-recipe-cooking-book-600w-504504346.jpg"),
    new Recipe("Recipe 2", "This is recipe 2", "https://image.shutterstock.com/image-photo/blank-vintage-recipe-cooking-book-600w-504504346.jpg"),
  ]

  @Output()
  recipeSelected = new EventEmitter<Recipe>()

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe)
  }

}
