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
 
  enviarGuarida(){
    this.service.guardia=this.guardia.value
    console.log(this.service.guardia)
    this.service.postGuardia(this.service.guardia).subscribe({next: (data)=> console.log(data),error: (e)=> console.log(e)});
  }


}
