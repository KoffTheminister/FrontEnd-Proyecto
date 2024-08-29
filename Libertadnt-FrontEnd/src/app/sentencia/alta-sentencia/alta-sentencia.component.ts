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
    this.duracion = new FormControl('',[Validators.required,Validators.maxLength(500)]);
    this.cantidad_cond = new FormControl('',[Validators.required]);
    this.fecha_dia = new FormControl('',[Validators.required,Validators.max(31)])
    this.fecha_mes = new FormControl('',[Validators.required,Validators.max(12)])
    this.fecha_año = new FormControl('',[Validators.required,Validators.max(9999)])
    this.nombre = new FormControl('',[Validators.required])
  
    this.sActual = new FormGroup({

      nombre: this.nombre
      ,descripcion: this.descripcion
      ,duracion: this.duracion
      ,cantidad_cond: this.cantidad_cond
      ,fecha_dia: this.fecha_dia
      ,fecha_mes: this.fecha_mes
      ,fecha_año: this.fecha_año 
      })
  
      
  };
  
  sActual: FormGroup;
  nombre: FormControl;
  descripcion: FormControl;
  duracion: FormControl;
  cantidad_cond: FormControl;
  fecha_dia: FormControl
  fecha_mes: FormControl
  fecha_año: FormControl
  verFomrulario(){
    let x = {cod_sentencia: 123456,
      descripcion: "exeso de facha"
      ,duracion: 20
      ,cantidad_cond: 30
      ,fecha_ini: "26/02/2001"}

    console.log(this.sActual.value);
    this.sActual.reset();
  }
  enviarFormulario(){
    this.service.postSentencias(this.sActual.value).subscribe({next: (data)=> console.log(data),error: (e)=> console.log(e)});
  }
}
