import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TallerService } from '../taller.service.js';

@Component({
  selector: 'app-alta-taller',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './alta-taller.component.html',
  styleUrl: './alta-taller.component.css'
})
export class AltaTallerComponent {
  constructor (private service : TallerService){
    this.estado= new FormControl('',[Validators.required,Validators.maxLength(30)]);
    this.decripcion= new FormControl('',[Validators.required,]);
    this.nombre= new FormControl('',[Validators.required,]);
    this.locacion= new FormControl('',[Validators.required,]);
    this.hora= new FormControl('',[Validators.required,]);
    this.diaDeLaSemana = new FormControl('',[Validators.required])
    this.cantMax= new FormControl('',[Validators.required,]);
    this.cantMin= new FormControl('',[Validators.required,]);
  
  this.taller = new FormGroup({
        nombre:this.nombre,
        decripcion: this.decripcion,
        estado: this.estado,
        locacion: this.locacion,
        hora: this.hora,
        diaDeLaSemana:this.diaDeLaSemana,
        cantMax:this.cantMax,
        cantMin:this.cantMin,
        
      })      
}
  taller  : FormGroup;
  nombre:FormControl;
  decripcion : FormControl;
  locacion : FormControl;
  estado: FormControl;
  diaDeLaSemana: FormControl;
  hora: FormControl;
  cantMax: FormControl;
  cantMin: FormControl;
  bandTaller:boolean | undefined
  validarTaller(){
    this.bandTaller=this.service.validarTaller(this.taller.value)
  }
  enviarTaller(){
    this.service.postTaller(this.taller.value).subscribe({
      next:(data)=>{console.log(data)},
      error:(e)=>{console.log(e)}})
    this.taller.reset()
  }

}
