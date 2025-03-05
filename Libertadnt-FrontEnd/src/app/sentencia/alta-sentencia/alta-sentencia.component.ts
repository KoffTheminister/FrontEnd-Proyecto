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
    this.duracion_año = new FormControl('',[Validators.required,Validators.max(9999)])
    this.nombre = new FormControl('',[Validators.required])
    this.orden_de_gravedad = new FormControl('',[Validators.required])
  
    this.sentencia = new FormGroup({

      nombre: this.nombre,
      descripcion: this.descripcion,
      duracion_año: this.duracion_año ,
      orden_de_gravedad: this.orden_de_gravedad
    })
  
      
  };
  
  sentencia: FormGroup;
  nombre: FormControl;
  descripcion: FormControl;
  duracion_año: FormControl
  orden_de_gravedad: FormControl
  bandera: undefined| string
  verFormulario(){
    let x = {
      cod_sentencia: 0,
      nombre: "",
      descripcion: "",
      duracion_anios: 0,
      orden_de_gravedad: 0

    }
    
    this.sentencia.reset();
  }
  enviarFormulario(){
    this.service.postSentencias(this.sentencia.value).subscribe({
      next:(data)=>{
        if(data.status === 201){
          console.log("la sentencia fue creada ", data)
          this.bandera='creada'
        }
        if(data.status == 202){
          this.bandera='existente'
          console.log("el guardia ya existe y se reanuda el contrato")
        }
      },
      error:(e)=>{
        if(e.status === 404){
          console.log("el guardia ya existe y se encuentra con contrato activo")
          this.bandera = 'activo'
        }
      }
    })
    this.sentencia.reset()
  }
}
