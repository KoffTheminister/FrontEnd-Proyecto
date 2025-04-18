import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-error500',
  standalone: true,
  imports: [],
  templateUrl: './error500.component.html',
  styleUrl: './error500.component.css'
})
export class Error500Component implements OnInit{
  constructor(public router: Router) {}


  ngOnInit(): void {
    let url = sessionStorage.getItem("ultima ruta");
    console.log("url anterior:",url)
    }
  componenteAnterior(){
    let url = sessionStorage.getItem("ultima ruta");
    console.log("redireccionar a :",url)
    this.router.navigate(['/noAutorizado'])
  }
  
  
  
}
