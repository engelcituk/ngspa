import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicio/heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private heroesService: HeroesService, private ruta: Router) { }

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
    // console.log('los heroes son.', this.heroes);
  }
  verHeroe(indice: number) {
    // console.log('el indice es', indice);
    this.ruta.navigate(['/heroe', indice]);
  }
}
