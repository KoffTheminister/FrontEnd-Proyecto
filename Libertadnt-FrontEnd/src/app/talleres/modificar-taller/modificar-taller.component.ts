import { Component, OnInit } from '@angular/core';
import { TallerService } from '../taller.service.js';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-modificar-taller',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './modificar-taller.component.html',
  styleUrl: './modificar-taller.component.css'
})
export class ModificarTallerComponent implements OnInit{
  constructor (public service : TallerService){
    this.cod_taller= new FormControl('',[Validators.maxLength(30)]);
    this.decripcion= new FormControl('',[]);
    this.nombre= new FormControl('',[]);
    this.locacion= new FormControl('',[]);
    this.horaIni= new FormControl('',[]);
    this.diaDeLaSemana = new FormControl('',[])
    this.horaFin= new FormControl('',[]);
    this.cantMin= new FormControl('',[]);
    this.estado = new FormControl(1,[]);
  
  this.taller = new FormGroup({
        nombre:this.nombre,
        decripcion: this.decripcion,
        cod_taller: this.cod_taller,
        locacion: this.locacion,
        horaIni: this.horaIni,
        diaDeLaSemana:this.diaDeLaSemana,
        horaFin:this.horaFin,
        cantMin:this.cantMin,
        estado:this.estado
        
      })      
}
  taller  : FormGroup;
  nombre:FormControl;
  decripcion : FormControl;
  locacion : FormControl;
  cod_taller: FormControl;
  diaDeLaSemana: FormControl;
  horaIni: FormControl;
  horaFin: FormControl;
  cantMin: FormControl;
  estado:FormControl;
  ngOnInit(): void {
    this.service.getTalleres().subscribe({
      next:(data)=>{
        if(data.status === 201){
          this.service.talleres=data
          console.log("talleres obtenidos")
        }},
      error:(e)=>{console.log(e)}})
  }
  modificarTalller(x:any){
    if(x.inscripcion!== true ){x.inscripcion = true}
    else if(x.inscripcion == true){x.inscripcion=false}
    console.log(x)
  }
  enviarModificacion(x:any){
    if(this.nombre.value!==''){x.nombre=this.nombre.value}else{x.nombre=undefined}
    if(this.diaDeLaSemana.value!==''){x.diaDeLaSemana=this.diaDeLaSemana.value}else{x.diaDeLaSemana=undefined}
    if(this.decripcion.value!==''){x.decripcion=this.decripcion.value}else{x.descipcion=undefined}
    if(this.locacion.value!==''){x.locacion=this.locacion.value}else{x.locacion=undefined}
    if(this.horaIni.value!==''){x.horaIni=this.horaFin.value}else{x.horaIni=undefined}
    if(this.horaFin.value!==''){x.horaFin=this.horaFin.value}else{x.horaFin=undefined}
    if(this.cantMin.value!==''){x.cantMin=this.cantMin.value}else{x.cantMin=undefined}
    if(this.estado.value=='cancelado'){x.estado=0}
    this.service.putTaller(x).subscribe({
      next:(data)=>{
        if(data.status=== 201){
          console.log(data)
          console.log("taller modificado")
        }},
      error:(e)=>{
        if(e.status=== 404){
          console.log("taller no modificado ")
        }}})
    console.log(x)
    console.log(this.taller.value)
    this.taller.reset()
  }
}
