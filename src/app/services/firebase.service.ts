import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { RecipeService } from "./recipe.service";
import { Recipe } from "../models/recipe.model";

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {
    private FirebaseURL: string = 'https://angular-recipes-3df14-default-rtdb.firebaseio.com/'

    constructor(
        private http: HttpClient,
        private recipeService: RecipeService
        ) {
    }

    storeRecipes() {
        const recipes: Recipe[]  = this.recipeService.getRecipes()
        this.http.put(
            `${this.FirebaseURL}recipes.json`,
            recipes
        ).subscribe(res => console.log(res))
    }
}