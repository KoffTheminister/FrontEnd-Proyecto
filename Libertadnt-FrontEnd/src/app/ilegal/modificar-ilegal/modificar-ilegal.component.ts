import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActividadService } from '../../actividades/actividad.service.js';

@Component({
  selector: 'app-modificar-ilegal',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './modificar-ilegal.component.html',
  styleUrl: './modificar-ilegal.component.css'
})
export class ModificarIlegalComponent {
  constructor (public service : ActividadService){
    this.decripcion= new FormControl('',[]);
    this.nombre= new FormControl('',[]);
    this.locacion= new FormControl('',[]);
    this.horaIni= new FormControl('',[]);
    this.diaDeLaSemana = new FormControl('',[])
    this.horaFin= new FormControl('',[]);
    this.cantMin= new FormControl('',[]);
    this.estado = new FormControl('',[]);
    this.presupuesto = new FormControl('',[]);
    this.ganancias = new FormControl('',[]);
    this.cantMax = new FormControl('',[]);
    
  
  this.ilegal = new FormGroup({
        nombre:this.nombre,
        decripcion: this.decripcion,
        locacion: this.locacion,
        horaIni: this.horaIni,
        diaDeLaSemana:this.diaDeLaSemana,
        horaFin:this.horaFin,
        cantMax:this.cantMax,
        cantMin:this.cantMin,
        estado:this.estado,
        presupuesto:this.presupuesto,
        ganancias:this.ganancias
        
      })      
}
  ilegal  : FormGroup;
  nombre:FormControl;
  decripcion : FormControl;
  locacion : FormControl;
  diaDeLaSemana: FormControl;
  horaIni: FormControl;
  horaFin: FormControl;
  cantMin: FormControl;
  estado:FormControl;
  presupuesto:FormControl;
  ganancias:FormControl;
  cantMax:FormControl
  ngOnInit(): void {
    this.service.getIlegales().subscribe({
      next:(data)=>{this.service.ilegales=data},
      error:(e)=>{console.log(e)}})
  }
  modificarIlegal(x:any){
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
    if(this.cantMax.value!==''){x.cantMax=this.cantMax.value}
    if(this.presupuesto.value!==''){x.presupuesto=this.presupuesto.value}
    if(this.ganancias.value!==''){x.ganancias=this.ganancias.value}
    if(this.estado.value=='cancelado'){x.estado=0}
    this.service.postIlegal(x).subscribe({next:(data)=>{console.log(data)},error:(e)=>{console.log(e)}})
    console.log(x)
    console.log(this.ilegal.value)
    this.ilegal.reset()
  }
}
