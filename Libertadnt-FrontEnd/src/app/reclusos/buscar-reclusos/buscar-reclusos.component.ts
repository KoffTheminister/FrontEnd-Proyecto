import { Component } from '@angular/core';
import { ReclusosService } from '../reclusos.service.js';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-buscar-reclusos',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './buscar-reclusos.component.html',
  styleUrl: './buscar-reclusos.component.css'
})
export class BuscarReclusosComponent {
  constructor(public service : ReclusosService){
    this.cod_recluso= new FormControl('',);
    this.nombre= new FormControl('',);
    this.apellido= new FormControl('',);
    this.dni= new FormControl('',[Validators.required,]);
  
  
    this.recluso = new FormGroup({
      nombre: this.nombre,
      cod_recluso: this.cod_recluso,
      apellido: this.apellido,
      dni: this.dni
    })    
  }
  fecha:Date = new Date()
  recluso  : FormGroup;
  nombre : FormControl;
  apellido : FormControl;
  cod_recluso: FormControl
  dni: FormControl
  bandera: boolean | undefined
  validarRecluso(){
    console.log("peticion")
    this.service.getOneRecluso(this.dni.value).subscribe({
      next:(data)=>{
        if(data.status == 201){
          console.log("recluso existente",data)
          this.service.recluso=data
          this.bandera = true   
          this.fecha = new Date(this.service.recluso.data.fecha_nac) 
        }
      } ,error: (e)=>{
        if(e.status == 404){
          console.log("recluso no existente")
          console.log(e)
          this.bandera=false  
        }
      } 
    });
  
    this.recluso.reset();
  }
  

}
