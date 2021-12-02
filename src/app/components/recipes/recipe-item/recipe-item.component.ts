import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../../../models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input()
  recipe: Recipe = new Recipe()

  constructor(private recipeService: RecipeService) { 
    
  }

  ngOnInit(): void {
  }

  onRecipeSelected(): void {
    this.recipeService.recipeSelected.emit(this.recipe)
  }
}
