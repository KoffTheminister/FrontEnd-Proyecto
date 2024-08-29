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
    this.cod_guardia= new FormControl('',[Validators.required,Validators.maxLength(30)]);
    this.nombre= new FormControl('',[Validators.required,]);
    this.apellido= new FormControl('',[Validators.required,]);
    this.fecha_ini= new FormControl('',[Validators.required,]);
    this.fecha_fin= new FormControl('');
  
    this.guardia = new FormGroup({

      nombre: this.nombre,
      cod_guardia: this.cod_guardia,
      apellido: this.apellido,
      fecha_fin: this.fecha_fin,
      fecha_ini: this.fecha_ini
      })}
    
  guardia : FormGroup;
  nombre : FormControl;
  apellido : FormControl;
  cod_guardia: FormControl;
  fecha_ini: FormControl;
  fecha_fin: FormControl;
  enviarGuarida(){
    this.service.postGuardia(this.guardia.value).subscribe({next: (data)=> console.log(data),error: (e)=> console.log(e)});
    console.log(this.guardia.value);
  }


}
