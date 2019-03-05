import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  /**
   * перевірка авторизації та редірект на головну сторінку
   */
  ngOnInit() {
    if (this.auth.isAuth()) {
      this.router.navigate(['/users']);
    }
  }
  /**
   * - метод стрворення унікальної реєстраційної одиниці
   * @param form - форма з данними про користувача
   */
  onSubmitHandler(form: NgForm) {
    let compA = 0;
    let compB = 0;
    form.value.mail.split('').forEach((sign: string) => {
      if (sign !== '@') {
        compB += +sign.charCodeAt(0);
      }
    });
    form.value.pass.split('').forEach((sign) => {
        compA += +sign.charCodeAt(0);
    });
    const token = compA * compB;
    localStorage.setItem('mail', form.value.mail);
    localStorage.setItem('password', form.value.pass);
    localStorage.setItem('token', token.toString());
    this.router.navigate(['/users']);
  }
}
