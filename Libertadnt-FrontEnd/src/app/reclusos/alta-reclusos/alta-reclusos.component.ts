import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReclusosService } from '../reclusos.service.js';

@Component({
  selector: 'app-alta-reclusos',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './alta-reclusos.component.html',
  styleUrl: './alta-reclusos.component.css'
})
export class AltaReclusosComponent {
  constructor (private service : ReclusosService){
    this.cod_recluso= new FormControl('',[Validators.required,Validators.maxLength(30)]);
    this.nombre= new FormControl('',[Validators.required,]);
    this.apellido= new FormControl('',[Validators.required,]);
    this.dni= new FormControl('',[Validators.required,]);
    this.cod_celda = new FormControl('',[Validators.required])
  
  
  this.recluso = new FormGroup({
        nombre: this.nombre,
        cod_recluso: this.cod_recluso,
        apellido: this.apellido,
        dni: this.dni})
  this.celda =new FormGroup({
    cod_celda:this.cod_celda
  })
        
}
  recluso  : FormGroup;
  nombre : FormControl;
  apellido : FormControl;
  cod_recluso: FormControl;
  cod_celda: FormControl;
  dni: FormControl;
  bandRecluso :boolean | undefined
  bandCelda :boolean | undefined
  celda: FormGroup;
validarRecluso(){
this.service.getOneCondena(this.cod_recluso.value).subscribe({
  next: (data)=>{this.service.recluso=data,this.bandRecluso=false},
  error: (e)=>{console.log(e),this.bandRecluso=true}
})
}
validarCelda(){
this.service.getOneCelda(this.cod_celda.value).subscribe({
  next: (data)=>{this.service.recluso=data,this.bandCelda=true},
  error: (e)=>{console.log(e),this.bandCelda=false}
})
}
enviarRecluso(){
  this.service.recluso=this.recluso.value
  this.service.recluso.celda=this.celda.value
  this.service.postRecluso(this.recluso.value).subscribe({
    next: (data)=>{console.log(data)},
    error: (e)=>{console.log(e)}
  })
  this.recluso.reset()
  this.celda.reset()
  this.bandCelda= undefined;
  this.bandRecluso=undefined
} 

}

