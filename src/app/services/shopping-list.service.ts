import { EventEmitter, Injectable, OnInit } from "@angular/core"
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

    constructor() {

    }

    ngOnInit(): void {

    }

    addIngredient(ingredient: Ingredient) {
        if (!ingredient || !ingredient.name) {
            return
        }
        this.ingredients.push(ingredient) 
        this.ingredientsChanged.next([...this.ingredients])
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients = [...this.ingredients, ...ingredients]
        this.ingredientsChanged.next([...this.ingredients])
    }

    getIngredients(): Ingredient[] {
        return [...this.ingredients]
    }

}