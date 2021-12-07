import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number
  isEditing: boolean = false

  constructor(private route: ActivatedRoute) { 
    this.id = 0
  }

  ngOnInit(): void {
    this.route.params
    .subscribe(params => {
      this.id = +params['id']
      this.isEditing = this.id !== null
    })
  }

}
