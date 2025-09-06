import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActividadService } from '../../actividades/actividad.service.js';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modificar-ilegal',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './modificar-ilegal.component.html',
  styleUrl: './modificar-ilegal.component.css'
})
export class ModificarIlegalComponent {
  constructor (public service : ActividadService,public modalService: NgbModal){
    this.codigo= new FormControl('',[]);
    
    
  
  this.ilegal = new FormGroup({
        codigo:this.codigo,
        
        
      })      
}
  ilegal  : FormGroup;
  codigo: FormControl;
  bandera: undefined|string
  bandReclusos:undefined|boolean
  open(content: any) {
    this.modalService.open(content, { centered: true });
  }

  buscarIlegal(){
    console.log(this.codigo.value)
    this.service.getOneIlegal(this.codigo.value).subscribe({
      next:(data)=>{
        if(data){
          console.log("encontrado", data)
          this.service.ilegales=data
          this.bandera= 'encontrado'
          if (!this.service.ilegales.reclusos.length) {
            this.bandReclusos=true
          }
        }
      },
      error:(e)=>{
        if(e.status == 404){
          console.log("no encontrado")
          this.bandera= 'no encontrado'
        }
      }
    })
  }
}
