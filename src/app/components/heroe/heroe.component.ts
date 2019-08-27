import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // sirve para recibir parametros
import { HeroesService } from '../../servicio/heroes.service';;

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent  {
  heroe: any = {};
  constructor(private rutaActivada: ActivatedRoute, private heroesService: HeroesService) {
    this.rutaActivada.params.subscribe( params => {
      this.heroe = this.heroesService.getHeroe(params['id'] );
      // console.log(this.heroe);
    });
  }

  // ngOnInit() {
  // }

}
