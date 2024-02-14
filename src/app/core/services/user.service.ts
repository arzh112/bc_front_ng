import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUsersUrl: string = environment.apiUrl + "/api/users";

  constructor(private http: HttpClient) { }

  getAllUser(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUsersUrl);
  }

  getOneUser(): Observable<User> {
    return this.http.get<User>(this.apiUsersUrl);
  }

  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(this.apiUsersUrl + "/" + userId);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUsersUrl, user);
  }

  updateUser(userId: number, user: User): Observable<User> {
    return this.http.put<User>(this.apiUsersUrl + "/" + userId, user);
  }

  deleteUser(userId: number): Observable<any> {
    return this.http.delete(this.apiUsersUrl + "/" + userId);
  }

}
