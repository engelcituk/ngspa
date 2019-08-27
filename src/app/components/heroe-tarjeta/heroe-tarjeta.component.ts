import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: []
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() indice: number;
  // para emitir desde el hijo al compononente padre
  @Output() heroeSeleccionado: EventEmitter<number>;


  constructor(private ruta: Router) {
    // inicializo en el constructor el emiter
    this.heroeSeleccionado = new EventEmitter();
  }
  ngOnInit() {
  }
  verHeroe() {
    // this.ruta.navigate(['/heroe', this.indice]);
    // this.heroeSeleccionado.emit(this.indice);
    this.ruta.navigate(['/heroe', this.indice]);
  }

}
