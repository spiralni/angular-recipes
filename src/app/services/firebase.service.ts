import { Injectable } from "@angular/core"
import { HttpClient } from '@angular/common/http'
import { RecipeService } from "./recipe.service"
import { Recipe } from "../models/recipe.model"
import { tap, map } from "rxjs/operators"
import { Observable } from "rxjs"

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {
    private FirebaseURL: string = 'https://angular-recipes-3df14-default-rtdb.firebaseio.com/'
    private RecipesURL: string = `${this.FirebaseURL}recipes.json`

    constructor(
        private http: HttpClient,
        private recipeService: RecipeService
        ) {
    }

    storeRecipes() {
        const recipes: Recipe[]  = this.recipeService.getRecipes()
        this.http.put(
            this.RecipesURL,
            recipes
        ).subscribe(res => console.log(res))
    }

    fetchRecipes() {
        return this.http.get<Recipe[]>(this.RecipesURL)
        .pipe(
            tap(res => console.log(res)),
            map(res => res.map(recipe => {
                    return { ...recipe, ingredients: recipe.ingredients || [] }
                })
            ),
            tap(res => this.recipeService.setRecipes(res))
        )
    }
}