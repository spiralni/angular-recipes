import { EventEmitter, Injectable } from "@angular/core"
import { Recipe } from "../components/recipes/recipe.model"

@Injectable({
    providedIn: 'root'
})
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>()

    private recipes: Recipe[] = [
        new Recipe("Recipe 1", "This is recipe 1", "https://image.shutterstock.com/image-photo/blank-vintage-recipe-cooking-book-600w-504504346.jpg"),
        new Recipe("Recipe 2", "This is recipe 2", "https://image.shutterstock.com/image-photo/blank-vintage-recipe-cooking-book-600w-504504346.jpg"),
    ]

    getRecipes(): Recipe[] {
        return this.recipes
    }

}