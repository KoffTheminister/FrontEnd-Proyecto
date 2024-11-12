import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReclusosService } from '../reclusos.service.js';
import { SentenciasService } from '../../sentencia/sentencias.service.js';

@Component({
  selector: 'app-alta-reclusos',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './alta-reclusos.component.html',
  styleUrl: './alta-reclusos.component.css'
})
export class AltaReclusosComponent implements OnInit {
  constructor (public service : ReclusosService,public sSentencia: SentenciasService){
    this.fecha= new FormControl('',[Validators.required,Validators.maxLength(30)]);
    this.nombre= new FormControl('',[Validators.required,]);
    this.apellido= new FormControl('',[Validators.required,]);
    this.dni= new FormControl('',[Validators.required,]);
    this.cod_condena = new FormControl('',[Validators.required])
  
  
  this.recluso = new FormGroup({
        nombre: this.nombre,
        fecha: this.fecha,
        apellido: this.apellido,
        dni: this.dni})
  this.condena =new FormGroup({
    cod_condena:this.cod_condena
  })
  
}
    ngOnInit(): void {
        this.sSentencia.getSentencias().subscribe({
          next:(data)=>{
            if(data.status== 201){
              this.sSentencia.sentencias=data
              console.log("sentencias cargadas ")
            }
          },
          error:(e)=>{
            console.log("error al cargar sentencias")
          }})
    }
  recluso  : FormGroup;
  nombre : FormControl;
  apellido : FormControl;
  fecha: FormControl;
  cod_condena: FormControl;
  dni: FormControl;
  bandRecluso :boolean | undefined
  bandCelda :boolean | undefined
  condena: FormGroup;
validarRecluso(){
this.service.getOneRecluso(this.dni.value).subscribe({
  next: (data)=>{
    if(data.status == 201){
      this.service.recluso=data,
      this.bandRecluso=false}
      
    },
  error: (e)=>{
    if(e.status == 404){
      console.log(e),
      this.bandRecluso=true}
    }
})
}
validarCelda(){
this.service.getOneCelda(this.cod_condena.value).subscribe({
  next: (data)=>{
    if(data.status == 201){
      this.service.recluso=data,this.bandCelda=true  
    }},
  error: (e)=>{
    if(e.status == 404){console.log(e),this.bandCelda=false}
    }
  
})
}
enviarRecluso(){
  this.service.recluso=this.recluso.value
  
  this.service.postRecluso(this.recluso.value).subscribe({
    next: (data)=>{
      if(data.status== 201){console.log(data)}
      
    },
    error: (e)=>{
      if(e.status == 404){
        console.log(e)
      }
      
    }
  })
  this.recluso.reset()
  this.condena.reset()
  this.bandCelda= undefined;
  this.bandRecluso=undefined
} 
agregarSentencia(x:any){
  seleccionadas={}
}

}

