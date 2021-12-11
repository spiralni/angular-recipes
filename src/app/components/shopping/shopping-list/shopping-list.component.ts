import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { Ingredient } from 'src/app/models/ingredient.model'
import { ShoppingListService } from 'src/app/services/shopping-list.service'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = []
  private subscription: Subscription | undefined

  constructor(private shoppingListService: ShoppingListService) { 

  }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients()

    this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
      (list: Ingredient[]) => this.ingredients = list
    )
  }

  onItemSelected(index: number): void {
    this.shoppingListService.setIngredientToEdit(index)
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}
