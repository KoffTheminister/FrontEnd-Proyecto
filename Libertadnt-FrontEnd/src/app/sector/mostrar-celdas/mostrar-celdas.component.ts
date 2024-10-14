import { Component, OnInit } from '@angular/core';
import { SectorService } from '../sector.service.js';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-mostrar-celdas',
  standalone: true,
  imports: [RouterOutlet ,RouterLink],
  templateUrl: './mostrar-celdas.component.html',
  styleUrl: './mostrar-celdas.component.css'
})
export class MostrarCeldasComponent implements OnInit {
  constructor (public service : SectorService,public route: ActivatedRoute){
    let cod_sector = route.snapshot.params['sector'];
    console.log(route)
  }
  
  ngOnInit(): void {
    console.log(this.route.snapshot.params['sector'])
    this.service.getCeldasDSeSector(this.route.snapshot.params['sector']).subscribe({
      next:(data)=>{
        this.service.celda=data;
        console.log(this.service.celdas)
      },
      error:(e)=>{console.log(e)}})
  }
}
