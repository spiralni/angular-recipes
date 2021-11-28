import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { IngredientService } from 'src/app/services/ingredient.service'
import { Ingredient } from '../../../models/ingredient.model'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  ingredient: Ingredient

  constructor(private ingredientService: IngredientService) { 
    this.ingredient= new Ingredient('', 0)
  }

  ngOnInit(): void {

  }

  onAdd(): void {
    this.ingredientService.ingredientAdded.emit({...this.ingredient})
  }

  onDelete(): void {}

  onClear(): void{
    this.ingredient.name = ''
    this.ingredient.amount = 0
  }
}
