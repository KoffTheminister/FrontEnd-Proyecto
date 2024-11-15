import { Component, OnInit } from '@angular/core';
import { SectorService } from '../sector.service.js';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-turnos',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './crear-turnos.component.html',
  styleUrl: './crear-turnos.component.css'
})
export class CrearTurnosComponent implements OnInit {
  constructor (public service : SectorService){
    this.cod_guardia= new FormControl('',[Validators.required,Validators.maxLength(30)]);
    this.turno= new FormControl('',[Validators.required,Validators.maxLength(30)]);
    this.cod_sector= new FormControl(service.sector.cod_sector,[Validators.required,Validators.maxLength(30)]);
    this.nuevo_turno = new FormGroup({
      cod_guardia: this.cod_guardia,
      turno: this.turno,
      cod_sector: this.cod_sector
      })
  }
  ngOnInit(): void {
    console.log("esto esta adando");
  }
    nuevo_turno  : FormGroup;
    cod_guardia: FormControl;
    turno: FormControl;
    cod_sector:FormControl

    bandera:boolean |undefined
    crearTurno(){
      console.log(this.nuevo_turno.value.cod_sector)
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
          }}
        })}
        
}
