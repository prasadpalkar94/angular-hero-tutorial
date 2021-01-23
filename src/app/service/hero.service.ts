import { Injectable } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../heroes-mock';
import { MessageServiceService } from '../messageService/message-service.service';

import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  

  constructor(private messageService:MessageServiceService) { }

  // getHeroes(): Hero[]{
  //   return HEROES;
  // }

  getHeroes(): Observable<Hero[] > {
    this.messageService.add('added heroes information.');
    return of(HEROES);
  }

  getHero(id: number ): Observable<Hero | undefined> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }


  
}
