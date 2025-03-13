import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SentenciasService } from '../sentencias.service.js';

@Component({
  selector: 'app-alta-sentencia',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './alta-sentencia.component.html',
  styleUrl: './alta-sentencia.component.css'
})
export class AltaSentenciaComponent {
  constructor (private service : SentenciasService){
    this.descripcion = new FormControl('',[Validators.required,Validators.maxLength(30)]);    
    this.duracion_anios = new FormControl('',[Validators.required,Validators.max(9999)])
    this.nombre = new FormControl('',[Validators.required])
    this.orden_de_gravedad = new FormControl('',[Validators.required])
  
    this.sentencia = new FormGroup({

      nombre: this.nombre,
      descripcion: this.descripcion,
      duracion_anios: this.duracion_anios ,
      orden_de_gravedad: this.orden_de_gravedad
    })
  
      
  };
  
  sentencia: FormGroup;
  nombre: FormControl;
  descripcion: FormControl;
  duracion_anios: FormControl
  orden_de_gravedad: FormControl
  bandera: undefined| string
  error:string =''

  enviarFormulario(){
    this.service.postSentencias(this.sentencia.value).subscribe({
      next:(data)=>{
        console.log(data)
        if(data.status == 201){
          console.log("la sentencia fue creada ", data)
          this.bandera='creada'
        }
      },
      error:(e)=>{
        if(e.status == 400){
          console.log("error de imput",e.message)
          this.error=e.error.message
          this.bandera='error'
        }
        if(e.status == 409){
          console.log("orden de gravedad ya existent")
          this.bandera = 'gravedad'
        }
        if(e.status == 410){
          console.log("nombre ya existente")
          this.bandera = 'nombre'
        }
      }
    })
    this.sentencia.reset()
  }
}
