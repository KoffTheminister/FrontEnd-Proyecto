import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { GuardiasService } from '../guardias.service.js';

@Component({
  selector: 'app-finalizar-guardia',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './finalizar-guardia.component.html',
  styleUrl: './finalizar-guardia.component.css'
})
export class FinalizarGuardiaComponent {
  constructor(public service : GuardiasService){
    this.dni= new FormControl('',[Validators.required,Validators.maxLength(30)]);
  this.guardia = new FormGroup({
        dni: this.dni,
        })}
  guardia  : FormGroup;
  dni: FormControl;
  fin:string | undefined
  bandera :undefined|boolean;
  validarGuarida(){
    this.service.getOneGuardias(this.dni.value).subscribe({
      next:(data)=>{
        if(data.status === 201){
          this.bandera=true
          console.log("guardia encontrado")
        }
      },
      error:(e)=>{
        if(e.status===404){
          this.bandera=false
          console.log("guardia no encontrado")
        }
      }})
  }
  finalizarContrato(){
    this.service.postFinalizarGuardia(this.dni.value).subscribe({
      next:(data)=>{
        if(data.status===201){
          console.log("contrato finalizado")
          this.fin="exito"
        }
      },
      error:(e)=>{
        if(e.status===404){
          this.fin="no encontrado"
          console.log("no se encontro el post")
        }
        if(e.status === 409){
          this.fin="finalizado"
          console.log("contrato ya finalizado")
        }
      }})
  }
}
