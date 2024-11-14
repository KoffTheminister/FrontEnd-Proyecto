import { Component, OnInit } from '@angular/core';
import { GuardiasService } from '../../guardias/guardias.service.js';
import { SectorService } from '../sector.service.js';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mostrar-turnos',
  standalone: true,
  imports: [],
  templateUrl: './mostrar-turnos.component.html',
  styleUrl: './mostrar-turnos.component.css'
})
export class MostrarTurnosComponent implements OnInit{
  constructor (public service : SectorService,public route: ActivatedRoute){
    let cod_sector = route.snapshot.params['sector'];
    console.log(route)
  }
  
  ngOnInit(): void {
    console.log(this.route.snapshot.params['sector'])
    this.service.getTuenosDSeSector(this.route.snapshot.params['sector']).subscribe({
      next:(data)=>{
        console.log("turnos obtenidos ")
        this.service.celdas=data;
        console.log("devolucio",data.data)
      },
      error:(e)=>{
        console.log("turnos no obtenidos",e)
      }})
  }
  
}
