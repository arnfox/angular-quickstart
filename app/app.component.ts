import { Component } from '@angular/core';


@Component({
    selector: 'my-app',
    template:`
      <h1>{{title}}</h1>
      <a routerLink="/heroes">list of heroes</a>
      <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title: string = "HEROES WALL";
}
