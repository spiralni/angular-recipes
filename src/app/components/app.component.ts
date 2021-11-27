import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-recipes';
  selectedLink: string = 'recipe'

  onLinkSelected(feature: string): void {
    this.selectedLink = feature
  }
}
