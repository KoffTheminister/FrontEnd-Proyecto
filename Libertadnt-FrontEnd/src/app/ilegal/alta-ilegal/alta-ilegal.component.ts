import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActividadService } from '../../actividades/actividad.service.js';

@Component({
  selector: 'app-alta-ilegal',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './alta-ilegal.component.html',
  styleUrl: './alta-ilegal.component.css'
})
export class AltaIlegalComponent {
  constructor(private service : ActividadService){
    this.decripcion= new FormControl('',[Validators.required,]);
    this.locacion= new FormControl('',[Validators.required,]);
    this.hora= new FormControl('',[Validators.required,]);
    this.diaDeLaSemana = new FormControl('',[Validators.required])
    this.cantMax= new FormControl('',[Validators.required,]);
    this.edadMin= new FormControl('',[Validators.required,]);
    this.nombre= new FormControl('',[Validators.required,]);
    this.horaIni= new FormControl('',[Validators.required,]);
    this.horaFin= new FormControl('',[Validators.required,]);
    this.estado= new FormControl('pendiente');
    this.presupuesto= new FormControl('',[Validators.required,]);
    this.ganancias= new FormControl(0);
    
  
  
  this.ilegal = new FormGroup({
        decripcion: this.decripcion,
        //cod_actividad: this.cod_actividad,
        locacion: this.locacion,
        hora: this.hora,
        diaDeLaSemana:this.diaDeLaSemana,
        cantMax:this.cantMax,
        edadMin:this.edadMin,
        nombre:this.nombre,
        horaIni:this.horaIni,
        horaFin:this.horaFin,
        estado:this.estado,
        presupuesto:this.presupuesto,
        ganancias:this.ganancias
      })}
ilegal  : FormGroup;
nombre:FormControl
decripcion : FormControl;
locacion : FormControl;
//cod_actividad: FormControl;
diaDeLaSemana: FormControl;
hora: FormControl;
cantMax: FormControl;
edadMin: FormControl;
horaIni:FormControl;
horaFin:FormControl;
estado:FormControl;
presupuesto:FormControl;
ganancias:FormControl;
bandera:boolean |undefined;
validarActividad(){
  this.service.postIlegal(this.ilegal.value).subscribe({next:(data)=>{
    if(data == String){
      this.bandera=true
      console.log("la actividad fue enviada")}
    console.log("paso por el post")
  }
  ,error:(e)=>{
    console.log(e)
    this.bandera=false
  }})
}
enviarActividad(){
this.bandera=undefined
}

}
