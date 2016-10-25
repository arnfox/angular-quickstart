import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Hero } from "./hero";
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  styles: [`
      .selected {color: red}
    `],
  template: `
    <div *ngIf="!heroes || !heroes.length">Loading heroes...</div>
    <ul>
      <li *ngFor="let hero of heroes">
        <span class="badge">{{hero.id}}</span>
        <span><a (click)="onSelect(hero)" [class.selected]="selectedHero === hero">{{hero.name}}</a></span>
      </li>
    </ul>
    
    <hero-details [hero]="selectedHero"></hero-details>
  `
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService) {};
  ngOnInit(): void {
    this.getHeroes();
  };
  getHeroes(): void {
    this.heroService.getHeroesSlow().then(heroes => this.heroes = heroes);
  };
  selectedHero: Hero;
  heroes: Hero[];

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
