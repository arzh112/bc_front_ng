import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Credentials } from '../models/credentials';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiLoginUrl: string = environment.apiUrl + "/api/login_check";

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient, private router: Router) { }

  signIn(credentials: Credentials) {
    return this.http.post<{token: string}>(this.apiLoginUrl, credentials).subscribe(data => {
      localStorage.setItem("token", data.token);
      this.router.navigate(["/user/account"]);
    });
  }

  // signIn(credentials: Credentials): Observable<Token> {
  //   return this.http.post<Token>(this.apiLoginUrl, credentials)
  // }

  getToken(): string | null {
    return localStorage.getItem("token");
  }

  logout(): void {
    localStorage.removeItem("token");
    this.router.navigate(["/login"]);
  }

  isLogged(): boolean {
    const token = localStorage.getItem('token');
    return !! token;
  }
}
