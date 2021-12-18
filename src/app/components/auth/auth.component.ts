import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { catchError } from "rxjs";
import { AuthService } from "src/app/services/auth.service";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent {
    isLoginMode = true

    constructor(private authService: AuthService) {

    }

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode
    }

    onSubmit(authForm: NgForm) {
        console.log(authForm)

        if (!authForm.valid) {
            return
        }

        const { email, password } = authForm.value

        this.authService.signUp(email, password)
            .subscribe(
                res => console.log(res)
            )

        authForm.reset()
    }

    get loginLabel() {
        return this.isLoginMode ? 'Login' : 'Sign Up'
    }
}