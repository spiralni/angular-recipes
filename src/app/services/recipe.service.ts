import { Injectable } from "@angular/core"
import { Subject } from "rxjs"
import { Recipe } from "../models/recipe.model"

@Injectable({
    providedIn: 'root'
})
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>()

    private recipes: Recipe[] = []

    setRecipes(recipes: Recipe[]): void {
        this.recipes = recipes
        this.notifyRecipesChanged()
    }

    getRecipes(): Recipe[] {
        return this.recipes
    }

    getRecipe(index: number): Recipe {
        return this.recipes[index]
    } 

    addRecipe(recipe: Recipe): void {
        this.recipes.push(recipe)
        this.notifyRecipesChanged()
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe
        this.notifyRecipesChanged()
    }

    removeRecipe(index: number) {
        this.recipes.splice(index, 1)
        this.notifyRecipesChanged()
    }

    private notifyRecipesChanged() {
        this.recipesChanged.next([...this.recipes])
    }
}