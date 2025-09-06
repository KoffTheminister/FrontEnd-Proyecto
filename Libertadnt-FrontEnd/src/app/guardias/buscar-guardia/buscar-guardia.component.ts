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
    this.dni= new FormControl('',[Validators.required,Validators.maxLength(30)]);
    this.guardia = new FormGroup({
        dni: this.dni,
    })
  }
  fecha : Date =  new Date()

  guardia  : FormGroup;
  dni: FormControl;
  bandera :undefined|boolean;
  buscarGuardia(){
    this.bandera= false
    console.log(this.guardia.invalid);
    console.log(sessionStorage.getItem('token'))
    this.service.getOneGuardias(this.dni.value).subscribe({
      next:(respuesta)=> {
        if(respuesta){
          console.log("guardia encontrado 201",respuesta)
          this.service.guardia = respuesta
          this.bandera = false;
          this.fecha = new Date(this.service.guardia.data.fecha_ini_contrato)
          console.log(this.fecha.getDate())
        }
      },
      error: (e)=>{console.log(e)
        if(e.status == 404){
          console.log("guardia no encontrado", e.status)
          this.bandera=true
        }
      }
    })
    console.log(this.service.guardia)
    console.log(this.dni.value)
    this.guardia.reset()
  }

}
