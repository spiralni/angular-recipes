import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number
  isEditing: boolean = false

  form: FormGroup = new FormGroup({});

  constructor(private route: ActivatedRoute) { 
    this.id = 0
  }

  ngOnInit(): void {
    this.route.params
    .subscribe(params => {
      this.id = +params['id']
      this.isEditing = this.id !== null
    })

    this.form = new FormGroup({
      'name': new FormControl('', [ Validators.required ]),
      'amount': new FormControl(30)
    })
  }

  onSubmit(): void {
    console.log(this.form)
  }
}
