import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { User } from '../components/interfaces/userInterfase';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl: string = environment.apiUrl;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
  constructor(
    private http: HttpClient
  ) { }
  /**
   * - метод отримання данних про всіх користувачів
   */
  getUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(`${this.apiUrl}/users`);
  }

  /**
   * - метод отримання данних про одного користувача
   */
  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/${id}`);
  }
  /**
   * метод редагування данних одного користувача
   * @param user - новий об'єкт із даними про користувача
   */
  editSingleUser(user: User) {
    return this.http.put(`${this.apiUrl}/users/${user.id}`, user, this.httpOptions);
  }
}
