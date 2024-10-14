import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReclusosService } from '../../reclusos/reclusos.service.js';
import { ActividadService } from '../../actividades/actividad.service.js';

@Component({
  selector: 'app-incribirse-ilegal',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './incribirse-ilegal.component.html',
  styleUrl: './incribirse-ilegal.component.css'
})
export class IncribirseIlegalComponent implements OnInit{
  constructor (public service : ActividadService,public sRecluso : ReclusosService){
    this.cod_recluso= new FormControl('',[Validators.required,Validators.maxLength(30)]);
    this.nombre= new FormControl('',[Validators.required,]);
    this.apellido= new FormControl('',[Validators.required,]);
    this.dni= new FormControl('',[Validators.required,]);
  this.recluso = new FormGroup({
        nombre: this.nombre,
        cod_recluso: this.cod_recluso,
        apellido: this.apellido,
        dni: this.dni})    
  }
  ngOnInit(): void {
    this.service.getIlegales().subscribe({
      next:(data)=>{this.service.ilegales=data},
      error:(e)=>{console.log(e)}})
  }
  recluso  : FormGroup;
  nombre : FormControl;
  apellido : FormControl;
  cod_recluso: FormControl;
  dni: FormControl;
  banderaRecluso:boolean|undefined
  inscriptos = []
  ingresarIsncripcion(x:any){
    if(x.inscripcion!== true ){x.inscripcion = true}
    else if(x.inscripcion == true){x.inscripcion=false}
    console.log(x)
  }
  validarRecluso(x:any){
    this.sRecluso.getOneRecluso(this.cod_recluso.value).subscribe({next:(data)=>{
      this.sRecluso.recluso=data
      this.banderaRecluso = true
      this.service.postIlegal(x.cod_taller).subscribe({next:(data)=>{console.log(data)},error:(e)=>{console.log(e)}})
    }
    ,error: (e)=>{console.log(e)
      this.banderaRecluso=false
    }
    });
  console.log(this.sRecluso.recluso);
  this.recluso.reset();
  
  }
  
}
