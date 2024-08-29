import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GuardiasService } from '../guardias.service.js';
import { ActivatedRoute } from '@angular/router';
import { RouterOutlet ,RouterLink} from '@angular/router';
import { UsuarioService } from './usuario.service.js';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [FormsModule,RouterOutlet ,RouterLink,ReactiveFormsModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent { 
    usuario: FormGroup;
    id:FormControl;
    nombre: FormControl;
    tipo : FormControl;
bander = false;
constructor (private service : UsuarioService ){
      this.id = new FormControl('',[Validators.required,])
      this.nombre = new FormControl('',[Validators.required])
      this.tipo = new FormControl('',[Validators.required])
      this.usuario = new FormGroup({
  
        id: this.id
        ,nombre: this.nombre
        ,tipo: this.tipo
      
        })
};

usuarios:any = [];
cargarUsuarios(){
 this.service.postUsuario(this.usuario.value).subscribe({next: (data)=> console.log(data),error: (e)=> console.log(e)});
 console.log(this.usuarios)
 console.log(this.usuario.value)
}




}
