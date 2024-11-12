import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { GuardiasService } from '../guardias.service.js';

@Component({
  selector: 'app-alta-guardia',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './alta-guardia.component.html',
  styleUrl: './alta-guardia.component.css'
})
export class AltaGuardiaComponent {
  constructor (private service : GuardiasService){
    this.dni= new FormControl('',[Validators.required,Validators.maxLength(30)]);
    this.nombre= new FormControl('',[Validators.required,]);
    this.apellido= new FormControl('',[Validators.required,]);
    
  
    this.guardia = new FormGroup({

      nombre: this.nombre,
      dni: this.dni,
      apellido: this.apellido,
      
      })}
    
  guardia : FormGroup;
  nombre : FormControl;
  apellido : FormControl;
  dni: FormControl;
  bandera: undefined| boolean
 
  enviarGuarida(){
    this.service.guardia=this.guardia.value
    console.log(this.service.guardia)
    this.service.getOneGuardias(this.dni.value).subscribe({
      next:(data)=>{
        if(data.status === 201){
          console.log("el guardia existe ", data)
          this.bandera=false
        }
      },
      error:(e)=>{
        if(e.status === 404){
          console.log("guardia inexistente ")
          this.bandera = true
          this.service.postGuardia(this.service.guardia).subscribe({
            next: (data)=> {
              if(data.status === undefined){console.log("guarida posteado",data)}
              
            },
            error: (e)=> {
              if(e.status === undefined){console.log("guarida NO posteado",e)}
            }})
        }
      }})
      this.guardia.reset()
  }


}
