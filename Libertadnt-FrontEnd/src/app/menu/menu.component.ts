import { Component } from '@angular/core';
import { RouterOutlet ,RouterLink, ActivatedRoute} from '@angular/router';
import { routes } from '../app.routes.js';
//import { TokenService } from '../shared/token.service.js';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(public route: ActivatedRoute){// },public token:TokenService){   
    let acceso = route.snapshot.params['menu'];
    console.log(route)
  }
  bandera : boolean | undefined 
  ngOnInit(): void {
    let usuario = sessionStorage.getItem("usuario");
    if( usuario == 'maestro'){this.bandera = true}
    if(usuario == 'menu'){this.bandera = false}
    console.log(usuario)
    //this.token.chequearToken() 
  }
}




