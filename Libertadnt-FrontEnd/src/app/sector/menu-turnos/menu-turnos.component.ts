import { Component } from '@angular/core';
import { SectorService } from '../sector.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-menu-turnos',
  standalone: true,
  imports: [],
  templateUrl: './menu-turnos.component.html',
  styleUrl: './menu-turnos.component.css'
})
export class MenuTurnosComponent {
  constructor (public service : SectorService,public route: ActivatedRoute){
    let codi_sector = route.snapshot.params['sector'];
    console.log(route)
    service.sector.cod_sector=codi_sector
    }
 
  crear:boolean|undefined
  bandera:boolean|undefined
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
