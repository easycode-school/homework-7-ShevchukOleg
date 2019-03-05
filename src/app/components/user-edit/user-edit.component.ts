import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { User } from '../interfaces/userInterfase';
import {MessageService} from 'primeng/api';



@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  public editingUser: User;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService,
    private MS: MessageService
  ) { }
    /**
     * -завантаження данних про користувача для подальшого редагування
     */
  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.usersService.getUser(id).subscribe((user: User) => {
      this.editingUser = user;
    });
  }

  /**
   * - метод зміни данних користувача
   * @param form - форма з данними про користувача
   */
  onSubmitHandler(form: NgForm) {
    const newUserData = {
      id: +this.route.snapshot.params['id'],
      name: form.value.name,
      username: form.value.userName,
      email: form.value.email,
      address: {
          street: form.value.street,
          suite: form.value.suite,
          city: form.value.city,
          zipcode: form.value.zipcode,
          geo: {
              lat: form.value.lat,
              lng: form.value.lng
          }
      },
      phone: form.value.phone,
      website: form.value.webSite,
      company: {
          name: form.value.organization,
          catchPhrase: form.value.description,
          bs: form.value.bs
      }
    };

    this.usersService.editSingleUser(newUserData).subscribe(
      (data) => console.log('Сервер прийняв зміни користувача', data),
      (error) => console.log(error),
      () => {
        this.MS.add({severity: 'success', summary: 'Service Message', detail: 'Данні оновлено!', life: 4000});
        this.navigateBack();
      }
    );
  }
   
  /**
   * -метод переходу до основної сторінки
   */
  navigateBack() {
    this.router.navigate(['/users']);
  }
}
