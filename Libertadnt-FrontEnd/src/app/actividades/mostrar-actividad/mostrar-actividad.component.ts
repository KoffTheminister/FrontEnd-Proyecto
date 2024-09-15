import { Component, OnInit } from '@angular/core';
import { ActividadService } from '../actividad.service.js';

@Component({
  selector: 'app-mostrar-actividad',
  standalone: true,
  imports: [],
  templateUrl: './mostrar-actividad.component.html',
  styleUrl: './mostrar-actividad.component.css'
})
export class MostrarActividadComponent implements OnInit{
  constructor (public service : ActividadService){}
  ngOnInit(): void {
    this.service.getActividades().subscribe({
      next:(data)=>{this.service.actividades=data},
      error:(e)=>{console.log(e)}})
  }
  
}
