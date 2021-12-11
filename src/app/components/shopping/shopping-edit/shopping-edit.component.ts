import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Subscription } from 'rxjs'
import { ShoppingListService } from 'src/app/services/shopping-list.service'
import { Ingredient } from '../../../models/ingredient.model'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('form') form: NgForm | undefined

  isEditing: boolean = false
  ingredient: Ingredient
  editIndex: number = -1
  suscription: Subscription | undefined

  constructor(private shoppingListService: ShoppingListService) { 
    this.ingredient = new Ingredient('', 0)
  }

  ngOnDestroy(): void {
    this.suscription?.unsubscribe()
  }

  ngOnInit(): void {
    this.suscription = this.shoppingListService.editIngredient
      .subscribe((index: number) => {
        this.editIndex = index
        this.isEditing = true
        this.ingredient = this.shoppingListService.getIngredient(index)
        this.form?.setValue({
          name: this.ingredient.name,
          amount: this.ingredient.amount
        })
      })
  }

  saveIngredient(): void {
    if (this.isEditing) {
      this.updateIngredient()
      return
    }

    this.addIngredient()
  }

  private addIngredient(): void {
    this.shoppingListService.addIngredient(
      new Ingredient(this.form?.value.name, this.form?.value.amount)
    )
  }

  private updateIngredient(): void {
    const { name, amount } = this.form?.value
    const newIngredient = new Ingredient(name, amount)
    this.shoppingListService.updateIngredient(this.editIndex, newIngredient)

    this.resetForm()
  }

  resetForm() {
    this.editIndex = -1
    this.isEditing = false
    this.form?.reset()
  }

  onDelete(): void {
    this.shoppingListService.deleteIngredient(this.editIndex)
    this.resetForm()
  }

  onClear(): void{
    this.resetForm()
  }

  get submitButtonLabel() {
    return this.isEditing ? 'Update' : 'Add'
  }
}
