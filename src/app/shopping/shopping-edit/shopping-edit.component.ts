import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { Ingredient } from '../../models/ingredient.model'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  ingredient: Ingredient

  @Output()
  ingredientAdded = new EventEmitter<Ingredient>()
  
  @Output()
  ingredientDeleted = new EventEmitter<Ingredient>()

  constructor() { 
    this.ingredient= new Ingredient('', 0)
  }

  ngOnInit(): void {

  }

  onAdd(): void {
    this.ingredientAdded.emit({...this.ingredient})
  }

  onDelete(): void {}

  onClear(): void{
    this.ingredient.name = ''
    this.ingredient.amount = 0
  }
}
