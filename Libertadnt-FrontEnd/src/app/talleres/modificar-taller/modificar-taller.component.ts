import { Component, OnInit } from '@angular/core';
import { TallerService } from '../taller.service.js';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-modificar-taller',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './modificar-taller.component.html',
  styleUrl: './modificar-taller.component.css'
})
export class ModificarTallerComponent implements OnInit{
  constructor (public service : TallerService){
    this.cod_taller= new FormControl('',[Validators.maxLength(30)]);
    this.decripcion= new FormControl('',[]);
    this.nombre= new FormControl('',[]);
    this.locacion= new FormControl('',[]);
    this.horaIni= new FormControl('',[]);
    this.diaDeLaSemana = new FormControl('',[])
    this.horaFin= new FormControl('',[]);
    this.cantMin= new FormControl('',[]);
    this.estado = new FormControl(1,[]);
  
  this.taller = new FormGroup({
        nombre:this.nombre,
        decripcion: this.decripcion,
        cod_taller: this.cod_taller,
        locacion: this.locacion,
        horaIni: this.horaIni,
        diaDeLaSemana:this.diaDeLaSemana,
        horaFin:this.horaFin,
        cantMin:this.cantMin,
        estado:this.estado
        
      })      
}
  taller  : FormGroup;
  nombre:FormControl;
  decripcion : FormControl;
  locacion : FormControl;
  cod_taller: FormControl;
  diaDeLaSemana: FormControl;
  horaIni: FormControl;
  horaFin: FormControl;
  cantMin: FormControl;
  estado:FormControl;
  ngOnInit(): void {
    this.service.getTalleres().subscribe({
      next:(data)=>{this.service.talleres=data},
      error:(e)=>{console.log(e)}})
  }
  modificarTalller(x:any){
    if(x.inscripcion!== true ){x.inscripcion = true}
    else if(x.inscripcion == true){x.inscripcion=false}
    console.log(x)
  }
  enviarModificacion(x:any){
    if(this.nombre.value!==''){x.nombre=this.nombre.value}
    if(this.diaDeLaSemana.value!==''){x.diaDeLaSemana=this.diaDeLaSemana.value}
    if(this.decripcion.value!==''){x.decripcion=this.decripcion.value}
    if(this.locacion.value!==''){x.locacion=this.locacion.value}
    if(this.horaIni.value!==''){x.horaIni=this.horaFin.value}
    if(this.horaFin.value!==''){x.horaFin=this.horaFin.value}
    if(this.cantMin.value!==''){x.cantMin=this.cantMin.value}
    if(this.estado.value=='cancelado'){x.estado=0}
    this.service.postTaller(x).subscribe({next:(data)=>{console.log(data)},error:(e)=>{console.log(e)}})
    console.log(x)
    console.log(this.taller.value)
    this.taller.reset()
  }
}
