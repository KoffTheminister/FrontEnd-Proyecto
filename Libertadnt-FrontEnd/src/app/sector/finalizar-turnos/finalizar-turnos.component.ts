import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SectorService } from '../sector.service.js';

@Component({
  selector: 'app-finalizar-turnos',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './finalizar-turnos.component.html',
  styleUrl: './finalizar-turnos.component.css'
})
export class FinalizarTurnosComponent {
  constructor (public service : SectorService){
    this.cod_guardia= new FormControl('',[Validators.required,Validators.maxLength(30)]);
    this.turno= new FormControl('',[Validators.required,Validators.maxLength(30)]);
    this.cod_sector= new FormControl(service.sector.cod_sector,[Validators.required,Validators.maxLength(30)]);
    this.baja_turno = new FormGroup({
      cod_turno: this.cod_guardia,
      turno: this.turno,
      cod_sector: this.cod_sector
      })
  }
    baja_turno  : FormGroup;
    cod_guardia: FormControl;
    turno: FormControl;
    cod_sector: FormControl
    bandera:boolean |undefined
    darBajaTurno(){
      console.log("codigo de sector ",this.baja_turno.value.cod_sector)
      this.service.putBajaTurno(this.cod_guardia.value,this.baja_turno.value.cod_sector,this.turno.value).subscribe(
        {
          next:(data)=>{
            if(data.status == 201){
              console.log("el turno se borro correctamente")
              this.bandera=true
            }
          },
          error:(e)=>{
            if(e.status==404){
              console.log("no existe turno ")
              this.bandera=false
            }
          }
        }
      )
    }
}
