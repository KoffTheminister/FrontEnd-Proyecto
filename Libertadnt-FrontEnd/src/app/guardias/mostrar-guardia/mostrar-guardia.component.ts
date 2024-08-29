import { Component } from '@angular/core';
import { GuardiasService } from '../guardias.service.js';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mostrar-guardia',
  standalone: true,
  imports: [],
  templateUrl: './mostrar-guardia.component.html',
  styleUrl: './mostrar-guardia.component.css'
})
export class MostrarGuardiaComponent {
  guardias :any =[];
  constructor (private service : GuardiasService){};
  traerGuardias(){
    this.service.getGuardias().subscribe((respuesta)=> this.guardias = respuesta);
    console.log(this.guardias);
  }

}
