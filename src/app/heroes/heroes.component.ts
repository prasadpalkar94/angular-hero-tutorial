import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../heroes-mock'; 
import { HeroService } from '../service/hero.service';
import { MessageServiceService } from '../messageService/message-service.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // heroes = HEROES;
  heroes : Hero[] | undefined;

  // getHeroes() : void{
  //   this.heroes= this.heroService.getHeroes()
    
  // }

  getHeroes() : void{
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  selectedHero:Hero | undefined;

  onSelect(hero:Hero): void{
    this.messageService.add('hero is been selected.');
    this.selectedHero = hero;
  }

  hero : Hero = {
    id:1,
    name:'Windstorm'
  };

  constructor(private heroService: HeroService, private messageService:MessageServiceService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  title = 'In hero app';

}
