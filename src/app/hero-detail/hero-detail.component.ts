import { Component, OnInit , Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero:Hero | undefined;
  id : number | undefined;
  constructor(
    private route:ActivatedRoute,
    private heroService:HeroService,
    private location:Location
  ) { }

  ngOnInit(): void {

  }

  goBack(): void {
    this.location.back();
  }

  getHero(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(this.id)
      .subscribe(hero => this.hero = hero);
  }


  
}
