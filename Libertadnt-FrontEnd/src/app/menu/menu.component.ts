import { Component } from '@angular/core';
import { RouterOutlet ,RouterLink, ActivatedRoute} from '@angular/router';
import { routes } from '../app.routes.js';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(public route: ActivatedRoute){   
    let acceso = route.snapshot.params['menu'];
    console.log(route)
  }
  bandera : boolean | undefined 
  ngOnInit(): void {
    if( this.route.snapshot.params['menu'] == 'menu-maestro'){this.bandera = true}
    if(this.route.snapshot.params['menu'] == 'menu'){this.bandera = false}
    console.log(this.route.snapshot.params['menu'])
  }
}


