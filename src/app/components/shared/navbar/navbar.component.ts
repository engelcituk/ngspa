import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private ruta: Router) { }

  ngOnInit() {
  }
  buscarHeroe(termino: string){
    // console.log(termino);
    this.ruta.navigate(['/buscar', termino]);
  }
}
