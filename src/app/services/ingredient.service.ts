import { EventEmitter, Injectable } from "@angular/core"
import { Recipe } from "../components/recipes/recipe.model"
import { Ingredient } from "../models/ingredient.model"

@Injectable({
    providedIn: 'root'
})
export class IngredientService {

    recipeSelected = new EventEmitter<Recipe>()
    ingredientAdded = new EventEmitter<Ingredient>()

    constructor() {
        this.ingredientAdded.subscribe(ingredient => { 
            if (!ingredient || !ingredient.name) {
                return
            }

            this.ingredients.push(ingredient) 
        })
    }

    private ingredients: Ingredient[] = [
        new Ingredient("onion", 2),
        new Ingredient("lettuce", 1),
        new Ingredient("tomato", 1),
    ]

    getIngredients(): Ingredient[] {
        return this.ingredients
    }

}