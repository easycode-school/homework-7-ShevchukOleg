import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { User } from '../interfaces/userInterfase';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  public user: User;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService
  ) { }

  /**
   * - при початку роботи компоненти відбувається запит до серверу про користувача із заданим 
   * ідентифікатором
   */
  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.usersService.getUser(id).subscribe((user: User) => {
      this.user = user;
      console.log(this.user);
    });
  }

  /**
   * /метод повернення до попередньої сторінки
   */
  navigateExmpl() {
    this.router.navigate(['/users']);
  }
}
