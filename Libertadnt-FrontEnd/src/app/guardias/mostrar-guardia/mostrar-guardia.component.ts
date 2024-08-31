import { Component, OnInit } from '@angular/core';
import { GuardiasService } from '../guardias.service.js';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mostrar-guardia',
  standalone: true,
  imports: [],
  templateUrl: './mostrar-guardia.component.html',
  styleUrl: './mostrar-guardia.component.css'
})
export class MostrarGuardiaComponent implements OnInit {
  guardias :any =[];
  constructor (public service : GuardiasService){};

  ngOnInit(): void {
    
  }
  traerGuardias(){
    this.service.getGuardias().subscribe(
      {next: (respuesta)=> {this.service.guardias = respuesta},
      error: (e) => {console.log(e)}
      });
    console.log(this.service.guardias);
  }

}
