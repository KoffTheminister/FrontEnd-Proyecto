import { Component, Input, input, Output, output,EventEmitter } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GuardiasService } from '../guardias.service.js';
import { ActivatedRoute } from '@angular/router';
import { RouterOutlet ,RouterLink} from '@angular/router';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [FormsModule,RouterOutlet ,RouterLink],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
usuario = {
  nombre: '',
  apellido: '',
  id: 0,
}
bander = false;
constructor (private service : GuardiasService ,private route: ActivatedRoute){};
validacion = 'nada';
guardias:any = [{id: 9,nombre:'tomas',apellido:'fanta'}];
cargarGuardias(){
 this.service.getGuardias().subscribe(respuesta => this.guardias= respuesta);
 this.validarGuardia();
}
validarGuardia(){
  const found = this.guardias.find((element:any) => element.id === this.usuario.id );
  if(found.id === this.usuario.id){this.bander= true;};
}



}
