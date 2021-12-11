import { Injectable, OnInit } from "@angular/core"
import { Subject } from "rxjs"
import { Ingredient } from "../models/ingredient.model"

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService implements OnInit {

    private ingredients: Ingredient[] = [
        new Ingredient("onion", 2),
        new Ingredient("lettuce", 1),
        new Ingredient("tomato", 1),
    ]

    ingredientsChanged = new Subject<Ingredient[]>()
    editIngredient  = new Subject<number>()

    constructor() {

    }

    ngOnInit(): void {

    }

    addIngredient(ingredient: Ingredient) {
        if (!ingredient || !ingredient.name) {
            return
        }
        this.ingredients.push(ingredient) 
        this.notifyIngredientsChanged()
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients = [...this.ingredients, ...ingredients]
        this.notifyIngredientsChanged()
    }

    updateIngredient(editIndex: number, newIngredient: Ingredient) {
        this.ingredients[editIndex] = newIngredient
        this.notifyIngredientsChanged()
      }

    getIngredients(): Ingredient[] {
        return [...this.ingredients]
    }

    getIngredient(index: number): Ingredient {
        return this.ingredients[index]
    }

    deleteIngredient(index: number) {
       this.ingredients.splice(index, 1)
        this.notifyIngredientsChanged()
    }

    setIngredientToEdit(index: number): void {
        this.editIngredient.next(index)
    }

    private notifyIngredientsChanged(): void {
        this.ingredientsChanged.next([...this.ingredients])
    }
}