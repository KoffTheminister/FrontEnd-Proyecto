import { Component, OnInit } from '@angular/core';
import { GuardiasService } from '../guardias.service.js';

@Component({
  selector: 'app-mostrar-turnos',
  standalone: true,
  imports: [],
  templateUrl: './mostrar-turnos.component.html',
  styleUrl: './mostrar-turnos.component.css'
})
export class MostrarTurnosComponent implements OnInit{
  constructor (public service : GuardiasService){};
  ngOnInit(): void {
    this.service.getGuardias().subscribe({
    next:(data)=>{this.service.guardias = data},
    error: (e)=>{console.log(e)}})
    console.log(this.service.guardias)
  }
  
}
