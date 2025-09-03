import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActividadService } from '../actividad.service.js';

@Component({
  selector: 'app-modificar-actividad',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './modificar-actividad.component.html',
  styleUrl: './modificar-actividad.component.css'
})
export class ModificarActividadComponent {
  constructor (private service : ActividadService){
    this.nombre= new FormControl('',[Validators.required,]);
    this.cod_actividad= new FormControl('',[Validators.required,Validators.maxLength(30)]);
    this.descripcion= new FormControl('',[Validators.required,]);
    this.locacion= new FormControl('',[Validators.required,]);
    this.estado = new FormControl('',[Validators.required,]);
  

  this.actividad = new FormGroup({
        nombre: this.nombre,
        descripcion: this.descripcion,
        cod_actividad: this.cod_actividad,
        locacion: this.locacion,
        estado: this.estado
      })      
}
  actividad  : FormGroup;
  nombre: FormControl
  descripcion : FormControl;
  locacion : FormControl;
  cod_actividad: FormControl;
  estado: FormControl
  bandActividad:boolean | undefined
  placeholderNombre:string|undefined
  placeholderLocacion:string|undefined
  placeholderDescripcion:string|undefined
  placeholderEstado:string|undefined
  validarActividad(){
    this.service.getOneActividad(this.cod_actividad.value).subscribe({
      next:(data)=>{
        if(data ){
          this.service.actividad=data
          console.log("actividad existente status = 201",data);
          this.bandActividad=true;
          this.placeholderNombre= data.nombre
          this.placeholderDescripcion = data.descripcion
          this.placeholderLocacion= data.locacion
          this.placeholderEstado = String(data.estado)
        }
      },
      error:(e)=>{
        if(e.status == 404){
          console.log("actividad no encontrada ",e)
          this.bandActividad=false
        }
      }})
  }
  cambiarActiviada(){
    if(this.nombre.value!==''){this.service.actividad.nombre=this.nombre.value}
    if(this.descripcion.value!==''){this.service.actividad.descripcion=this.descripcion.value}
    if(this.locacion.value!==''){this.service.actividad.locacion=this.locacion.value}
    if(this.estado.value!==''){this.service.actividad.estado=this.estado.value}
    
    
    this.service.postActividad(this.service.actividad).subscribe({
      next:(data)=>{console.log("activad posteada ", data)},
      error:(e)=>{console.log("actividad no posteada ", e)}})
      this.bandActividad = undefined
  }
}
