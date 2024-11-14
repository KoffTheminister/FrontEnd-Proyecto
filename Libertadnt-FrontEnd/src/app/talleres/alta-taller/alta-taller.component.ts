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
    this.estado= new FormControl(1);
    this.descripcion= new FormControl('',[Validators.required,]);
    this.nombre= new FormControl('',[Validators.required,]);
    this.locacion= new FormControl('',[Validators.required,]);
    this.diaDeLaSemana = new FormControl('',[Validators.required])
    this.horaInicio= new FormControl('',[Validators.required,]);
    this.horaFin= new FormControl('',[Validators.required,]);
  
  this.taller = new FormGroup({
      nombre: this.nombre,
      descripcion: this.descripcion, 
      locacion: this.locacion, 
      diaDeLaSemana: this.diaDeLaSemana, 
      horaInicio: this.horaInicio, 
      horaFin: this.horaFin,
      estado: this.estado
  })      
}
  taller  : FormGroup;
  nombre:FormControl;
  descripcion : FormControl;
  locacion : FormControl;
  estado: FormControl;
  diaDeLaSemana: FormControl;
  horaInicio: FormControl;
  horaFin: FormControl;
  bandTaller:boolean | undefined
  validarTaller(){
    this.enviarTaller()
  }
  enviarTaller(){
    this.service.postTaller(this.taller.value).subscribe({
      next:(data)=>{
        if(data.status == 201){
          console.log("taller posteado con exito",data)
          this.bandTaller=true
        }},
      error:(e)=>{
        if(e.status == 409){
          console.log("interferencia con otro taller",e)
          this.bandTaller=false
        }
      }})
    this.taller.reset()
  }

}
