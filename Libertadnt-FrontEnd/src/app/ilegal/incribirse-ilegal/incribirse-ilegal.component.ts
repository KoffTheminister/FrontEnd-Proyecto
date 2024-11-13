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
    this.cod_recluso= new FormControl('',[Validators.required,]);
  this.recluso = new FormGroup({
        cod_recluso:this.cod_recluso
      })    
  }
  ngOnInit(): void {
    this.service.getIlegales().subscribe({
      next:(data)=>{
        if(data.status== 201){
          console.log("se recuperaron las actividades")
          this.service.ilegales=data
        }},
      error:(e)=>{
        if(e.status == 404){
          console.log("no se recuperaron las actividades",e)
        }
      }})
  }
  recluso  : FormGroup;
  
  cod_recluso: FormControl;
  banderaRecluso:boolean|undefined
  inscriptos = []
  ingresarIsncripcion(x:any){
    if(x.inscripcion!== true ){x.inscripcion = true}
    else if(x.inscripcion == true){x.inscripcion=false}
    console.log(x)
  }
  validarRecluso(x:any){
    this.sRecluso.getOneRecluso(this.cod_recluso.value).subscribe({
      next:(data)=>{
      if(data.status == 201){
        this.sRecluso.recluso=data
        this.banderaRecluso = true
        this.service.InscribirActividadIlegal(this.sRecluso.recluso.data.cod_recluso,x.cod_taller).subscribe({
          next:(data)=>{
            if(data.status == 201){
              console.log("taller posteado",data)

            }},
          error:(e)=>{
            if(e.status== 404){
              console.log("talller no posteado",e)
            }
            }})
      }
      
    }
    ,error: (e)=>{console.log(e)
      this.banderaRecluso=false
    }
    });
  console.log(this.sRecluso.recluso);
  this.recluso.reset();
  
  }
  
}
