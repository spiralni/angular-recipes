import { ThrowStmt } from "@angular/compiler"
import { EventEmitter, Injectable } from "@angular/core"
import { Ingredient } from "../models/ingredient.model"
import { Recipe } from "../models/recipe.model"

@Injectable({
    providedIn: 'root'
})
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>()

    private recipes: Recipe[] = [
        new Recipe(
            "Recipe 1", 
            "This is recipe 1", 
            "https://image.shutterstock.com/image-photo/blank-vintage-recipe-cooking-book-600w-504504346.jpg",
            [
                new Ingredient('Wheat', 10),
                new Ingredient('Bailey', 10),
            ]),
        new Recipe("Recipe 2", "This is recipe 2", "https://image.shutterstock.com/image-photo/blank-vintage-recipe-cooking-book-600w-504504346.jpg"),
    ]

    getRecipes(): Recipe[] {
        return this.recipes
    }

    getRecipe(index: number): Recipe {
        return this.recipes[index]
    }

}