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
    this.traerGuardias()
  }
  traerGuardias(){
    this.service.getGuardias().subscribe({
      next: (data)=> {
        if(data ){
          console.log("guardias cargados, 201", data)
          this.service.guardias = data
        }
      },
      error: (e) => {
        if(e.status === 404){
          console.log("guardias no existentes ",e)
        }
      }
    });
    console.log(this.service.guardias);
  }

}
