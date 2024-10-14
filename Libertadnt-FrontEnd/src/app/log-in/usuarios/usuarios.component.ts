import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service.js';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit{
  constructor(public service: UsuarioService){}
  ngOnInit(): void {
    this.service.getUsuario().subscribe({
      next:(data)=>{this.service.usuarios=data},
      error:(e)=>{console.log(e)}})
    console.log(this.service.usuarios)
  }

}
