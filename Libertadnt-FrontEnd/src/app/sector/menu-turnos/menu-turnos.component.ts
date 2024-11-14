import { Component } from '@angular/core';
import { SectorService } from '../sector.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-menu-turnos',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './menu-turnos.component.html',
  styleUrl: './menu-turnos.component.css'
})
export class MenuTurnosComponent {
  constructor (public service : SectorService,public route: ActivatedRoute){
    let codi_sector = route.snapshot.params['sector'];
    console.log(route)

    this.cod_guardia= new FormControl('',[Validators.required,Validators.maxLength(30)]);
    this.turno= new FormControl('',[Validators.required,Validators.maxLength(30)]);
    this.nuevo_turno = new FormGroup({
      cod_guardia: this.cod_guardia,
      turno: this.turno,
      cod_sector: codi_sector
      })}
  nuevo_turno  : FormGroup;
  cod_guardia: FormControl;
  turno: FormControl;
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
  crearTurno(){
    this.service.postTurno(this.nuevo_turno.value).subscribe({
      next:(data)=>{
        if(data.status == 201){
          console.log("se guardo el guaridia exitosamente")
          this.bandera=true

        }
      },
      error:(e)=>{
        if(e.status=409){
          console.log("el guardia esta ocupado en ese momento")
          this.bandera=false
        }
      }})
  }
}
