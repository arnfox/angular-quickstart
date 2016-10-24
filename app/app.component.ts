import { Component } from '@angular/core';
const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
]

export class Hero {
  id: number;
  name: string;
}

@Component({
    selector: 'my-app',
    styles: [`
      .selected {color: red}
    `],
    template:`
  <h1>{{title}}</h1>
  
  <ul>
    <li *ngFor="let hero of heroes">
      <span class="badge">{{hero.id}}</span>
      <span><a (click)="onSelect(hero)" [class.selected]="selectedHero === hero">{{hero.name}}</a></span>
    </li>
  </ul>
  
  <div *ngIf="selectedHero">
    <h2>{{selectedHero.name}} details!</h2>
    <div><label>id: </label>{{selectedHero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="selectedHero.name" placeholder="name of your hero">
    </div>
  </div>
  `
})
export class AppComponent {
  selectedHero: Hero;
  title: string = "users list";
  heroes = HEROES;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}