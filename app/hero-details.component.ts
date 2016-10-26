import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";
import { Hero } from "./hero";
import {HeroService} from "./hero.service";

@Component({
  moduleId: module.id,
  selector: "hero-details",
  template: `
    <h2> Today's Hero: </h2>
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name of your hero">
      </div>
    </div>
  `
})

export class HeroDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
  ) {}

  ngOnInit(){
    this.route.params.forEach((params: Params) => {
      this.heroService.getHero(+params['id'])
        .then(hero => this.hero = hero)
    })
  }

  @Input()
  hero: Hero;
}

