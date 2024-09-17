import { Component, OnInit } from '@angular/core';
import { TallerService } from '../taller.service.js';

@Component({
  selector: 'app-mostrar-taller',
  standalone: true,
  imports: [],
  templateUrl: './mostrar-taller.component.html',
  styleUrl: './mostrar-taller.component.css'
})
export class MostrarTallerComponent implements OnInit{
  constructor (public service : TallerService){}
  ngOnInit(): void {
    this.service.getTalleres().subscribe({
      next:(data)=>{this.service.talleres=data},
      error:(e)=>{console.log(e)}})
  }


}
