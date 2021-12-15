import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number
  isEditing: boolean = false

  recipeForm: FormGroup = new FormGroup({});

  constructor(private route: ActivatedRoute, 
    private recipeService: RecipeService,
    private formBuilder: FormBuilder) { 
    this.id = 0
  }

  ngOnInit(): void {
    this.route.params
    .subscribe(params => {
      this.id = +params['id']
      this.isEditing = this.id !== null
      this.initRecipeForm()
    })
  }

  private initRecipeForm(): void {
    let recipeName = ''
    let recipeDescription = ''
    let recipeImagePath = ''
    let ingredientControls = this.formBuilder.array([])

    if (this.isEditing) {
      const recipe = this.recipeService.getRecipe(this.id)
      recipeName = recipe.name
      recipeImagePath = recipe.imagePath
      recipeDescription = recipe.description

      if (recipe.ingredients) {
        for (let ingredient of recipe.ingredients) {
          ingredientControls.push(
            this.formBuilder.group({
              name: new FormControl(ingredient.name, [Validators.required]),
              amount: new FormControl(ingredient.amount, [Validators.required])
            })
          )
        }
      }
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, [Validators.required]),
      imagePath: new FormControl(recipeImagePath, [Validators.required]),
      description: new FormControl(recipeDescription, [Validators.required]),
      ingredients: ingredientControls
    })
  }

  get controls() {
    return (<FormArray>this.recipeForm.controls['ingredients']).controls
  }

  onSubmit(): void {
    const newRecipe = new Recipe(
      this.recipeForm.value['name'], 
      this.recipeForm.value['description'],
      this.recipeForm.value['imagePath'],
      this.recipeForm.value['ingredients']
    )

    if (this.isEditing) {
      this.recipeService.updateRecipe(this.id, newRecipe)
      return
    }

    this.recipeService.addRecipe(newRecipe)

    console.log(this.recipeForm)
  }

  addIngredient(): void {
    (<FormArray>this.recipeForm.controls['ingredients']).push(
      this.formBuilder.group({
        name: '',
        amount: ''
      })
    )
  }
}
