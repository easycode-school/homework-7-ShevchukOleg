import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private title: Title
  ) { }

  /**
   * метод отримання данних що передаються через роутер для визначення тайтлу сторінки
   */
  ngOnInit() {
    this.route.data.subscribe((item) => {
      this.title.setTitle(item.title);
    });
  }

}
