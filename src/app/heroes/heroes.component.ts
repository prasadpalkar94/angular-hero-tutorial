import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../heroes-mock'; 

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;

  selectedHero:Hero | undefined;

  onSelect(hero:Hero): void{
    this.selectedHero = hero;
  }

  hero : Hero = {
    id:1,
    name:'Windstorm'
  };

  constructor() { }

  ngOnInit(): void {
  }

  title = 'In hero app';

}
