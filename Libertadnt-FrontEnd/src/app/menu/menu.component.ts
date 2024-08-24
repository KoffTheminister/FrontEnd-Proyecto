import { Component } from '@angular/core';
import { RouterOutlet ,RouterLink} from '@angular/router';
import { routes } from '../app.routes.js';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterOutlet ,RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
