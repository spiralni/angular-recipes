import { Component, EventEmitter, Output } from "@angular/core";
import { FirebaseService } from "src/app/services/firebase.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    constructor(private firebaseService: FirebaseService) {

    }

    onSaveData(): void {
        this.firebaseService.storeRecipes()
    }

    onFetchRecipe() {
        this.firebaseService.fetchRecipes()
    }
}