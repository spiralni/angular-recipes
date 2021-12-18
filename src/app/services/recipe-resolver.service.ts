import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Recipe } from "../models/recipe.model";
import { FirebaseService } from "./firebase.service";
import { RecipeService } from "./recipe.service";

@Injectable({
    providedIn: 'root'
})
export class RecipeResolverService implements Resolve<Recipe[]> {
    constructor(
        private firebaseService: FirebaseService,
        private recipeService: RecipeService
    ) {

    }
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
        const recipes = this.recipeService.getRecipes()

        if (recipes.length <= 0) {
            return this.firebaseService.fetchRecipes()
        }
        
        return recipes
    }
}