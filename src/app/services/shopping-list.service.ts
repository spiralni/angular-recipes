import { EventEmitter, Injectable, OnInit } from "@angular/core"
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

    ingredientsChanged = new EventEmitter<Ingredient[]>()

    constructor() {

    }

    ngOnInit(): void {

    }

    addIngredient(ingredient: Ingredient) {
        if (!ingredient || !ingredient.name) {
            return
        }
        this.ingredients.push(ingredient) 
        this.ingredientsChanged.emit([...this.ingredients])
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients = [...this.ingredients, ...ingredients]
        this.ingredientsChanged.emit([...this.ingredients])
    }

    getIngredients(): Ingredient[] {
        return [...this.ingredients]
    }

}