import { Component, OnInit } from '@angular/core'
import { Ingredient } from 'src/app/models/ingredient.model'
import { IngredientService } from 'src/app/services/ingredient.service'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = []

  constructor(private ingredientService: IngredientService) { 

  }

  ngOnInit(): void {
    this.ingredients = this.ingredientService.getIngredients()
  }

  onIngredientAdded(ingredient: Ingredient): void {
    //this.ingredientService.push(ingredient)
  }

}
