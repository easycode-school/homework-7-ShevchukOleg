import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  /**
   * isAuth - метод перевірки авторизації
   */
  isAuth() {
    const mail = localStorage.getItem('mail');
    const passwoord = localStorage.getItem('password');
    const token = localStorage.getItem('token');
    if (mail && passwoord && token ) {
      return true;
    } else {
      return false;
    }
  }
}
