import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-acceso',
  standalone: true,
  imports: [],
  templateUrl: './acceso.component.html',
  styleUrl: './acceso.component.css'
})
export class AccesoComponent implements OnInit{
  constructor(public route: ActivatedRoute){   
    let acceso = route.snapshot.params['acceso'];
  }
  bandera : boolean =false
  ngOnInit(): void {
    if( this.route.snapshot.params['acceso'] === 'true'){this.bandera = true}
    if(this.route.snapshot.params['acceso'] === 'false'){this.bandera = false}
  }
  
  
}
