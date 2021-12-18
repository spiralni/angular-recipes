import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { RecipeDetailComponent } from "./components/recipes/recipe-detail/recipe-detail.component"
import { RecipeEditComponent } from "./components/recipes/recipe-edit/recipe-edit.component"
import { RecipeItemComponent } from "./components/recipes/recipe-item/recipe-item.component"
import { RecipeStartComponent } from "./components/recipes/recipe-start/recipe-start.component"
import { RecipesComponent } from "./components/recipes/recipes.component"
import { ShoppingListComponent } from "./components/shopping/shopping-list/shopping-list.component"
import { RecipeResolverService } from "./services/recipe-resolver.service"

const routes: Routes = [
    {
      path: '',
      redirectTo: '/recipes',
      pathMatch: 'full'
    },
    {
      path: 'recipes',
      component: RecipesComponent,
      children: [
        {
          path: '',
          component: RecipeStartComponent
        },
        {
          path: 'new',
          component: RecipeEditComponent
        },
        {
          path: ':id/edit',
          component: RecipeEditComponent
        },
        {
          path: ':id',
          component: RecipeDetailComponent,
          resolve: [RecipeResolverService]
        }
      ]
    },
    {
      path: 'shopping-list',
      component: ShoppingListComponent
    }
  ]

  @NgModule({
      imports: [
        RouterModule.forRoot(routes)
      ],
      exports: [RouterModule]
  })
export class AppRoutingModule {

}