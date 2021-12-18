import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core"
import { AppConfig } from '../config/app-config'

interface AuthResponseData {
    kind: string,
    idToken: string,
    refreshToken: string,
    expriresIn: string,
    localId: string
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private AuthURL: string = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=${AppConfig.AuthAPIKey}`
    constructor(
        private http: HttpClient
    ) {

    }

    signUp(email: string, password: string) {
        return this.http.post<AuthResponseData>(
            this.AuthURL,
            {
                email,
                password,
                returnSecureToken: true
            }
        )
    }
}