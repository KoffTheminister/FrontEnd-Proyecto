import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { GuardiasService } from '../guardias.service.js';

@Component({
  selector: 'app-buscar-guardia',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './buscar-guardia.component.html',
  styleUrl: './buscar-guardia.component.css'
})
export class BuscarGuardiaComponent {
constructor(public service : GuardiasService){
  this.cod_guardia= new FormControl('',[Validators.required,Validators.maxLength(30)]);
  this.nombre= new FormControl('',[Validators.required,]);
  this.apellido= new FormControl('',[Validators.required,]);


this.guardia = new FormGroup({
      nombre: this.nombre,
      cod_guardia: this.cod_guardia,
      apellido: this.apellido,})}

guardia  : FormGroup;
nombre : FormControl;
apellido : FormControl;
cod_guardia: FormControl;
bandera = false;
guardias:any =[];
buscarGuardia(){
  this.bandera= false;
  this.service.getOneGuardias(this.cod_guardia.value).subscribe({next:(respuesta)=> {this.service.guardias = respuesta},
    error: (e)=>{console.log(e)}
  })
  console.log(this.service.guardias)
  console.log(this.cod_guardia.value)
  if(this.service.guardias.length === 0){
    this.bandera = true;
  }
}


}
