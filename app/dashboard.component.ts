import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {Hero} from "./hero";
import {HeroService} from "./hero.service";


@Component({
  selector: "heroes-dashboard",
  template: `
    <h2>Best Heroes</h2>
    <ul *ngIf="heroes">
      <div *ngFor="let hero of heroes" (click)="heroDetails(hero)" class="col-md-4"> 
        {{hero.name}}
      </div>
    </ul>
  `
})
export class DashboardComponent implements OnInit {
  constructor(private heroService: HeroService, private router: Router){}

  ngOnInit(){
    this.heroService.getHeroes()
      .then(heroes => {this.heroes = heroes.slice(0, 4)})
  }

  heroes: Hero[];

  heroDetails(hero: Hero) {
    this.router.navigate(['/heroes', hero.id]);
  }
}
