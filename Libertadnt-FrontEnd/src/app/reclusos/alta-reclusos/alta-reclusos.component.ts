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
export class AltaReclusosComponent implements OnInit{
  constructor (public service : ReclusosService,public sSentencia : SentenciasService){
    this.fecha= new FormControl('',[Validators.required,Validators.maxLength(30)]);
    this.nombre= new FormControl('',[Validators.required,]);
    this.apellido= new FormControl('',[Validators.required,]);
    this.dni= new FormControl('',[Validators.required,]);
    this.cod_sentencia = new FormControl('',[Validators.required])
  
  
  this.recluso = new FormGroup({
        nombre: this.nombre,
        fecha: this.fecha,
        apellido: this.apellido,
        dni: this.dni})
  this.condena =new FormGroup({
    cod_sentencia:this.cod_sentencia
  })
  
}
  ngOnInit(): void {
    this.sSentencia.getSentencias().subscribe({
      next:(data)=>{
        if(data.status == 201){
          this.sSentencia.sentencias=data
          console.log("sentencias obtenidas")
        }
      },
      error:(e)=>{
        if(e.status == 404){console.log("error en cargar sentencias")}
      }})
  }
  recluso  : FormGroup;
  nombre : FormControl;
  apellido : FormControl;
  fecha: FormControl;
  cod_sentencia: FormControl;
  dni: FormControl;
  bandRecluso :boolean | undefined
  bandCelda :boolean | undefined
  condena: FormGroup;
  respuesta:any = []
  value:string|undefined
validarRecluso(){
this.service.postRecluso(this.dni.value).subscribe({
  next: (data)=>{
    console.log("recluso posteado")
    if(data.status == 201){
      this.enviarCondena()
      console.log("recluso creado")
      this.service.recluso=data
      this.bandRecluso=true
    }
  },
  error: (e)=>{
    if(e.status == 203){
      console.log("recluso tiene condena activa")
      this.bandRecluso=false}
    if(e.status == 202 ) {
      console.log("recluso existente")
      this.enviarCondena()
      this.bandRecluso=true      
    }}
})
}
enviarCondena(){
  let sentencia_enviar={
    cod_recluso: this.dni,
    cod_sentencias: this.respuesta
  }
  this.service.postCondena(sentencia_enviar).subscribe({
    next:(data)=>{
      if(data.status== 201){
        console.log("condena posteada")
      }
    },
    error:(e)=>{
      if(e.status== 404){
        console.log("condena no posteada")
      }
    }})
}
agregarSentencia(sent:any){
  if(this.validarSentencia(sent)){
    this.respuesta.push(sent)
    this.value='true'
  }
  
}
quitarSentencia(sent:any){
  this.respuesta.splice(this.respuesta.findIndex((item: any)=>{item == sent}),1)
  this.value='false'
}
validarSentencia(sent:any){
  let encontrado = this.respuesta.find((x:any)=>x == sent)
  console.log(encontrado)
  if(encontrado == undefined){
    return true
  }
  return false
}

}

