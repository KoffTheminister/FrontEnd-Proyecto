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
      next:(data)=>{
        if(data.status == 201){
          this.service.talleres=data
          console.log("talleres obtenidos")
        }},
      error:(e)=>{
        if(e.status==  404){
          console.log("talleres NO obtenidos")
        }}})
  }


}
