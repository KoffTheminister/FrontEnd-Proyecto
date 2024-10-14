import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    administador: FormControl
    guardia:FormControl
bander = false;
constructor (private service : UsuarioService ){
      this.id = new FormControl('',[Validators.required,])
      this.nombre = new FormControl('',[Validators.required])
      this.administador = new FormControl(false,[Validators.required])
      this.guardia = new FormControl(false,[Validators.required])
      this.usuario = new FormGroup({
  
        id: this.id,
        nombre: this.nombre,
        
        })
};
bandUsuario:boolean | undefined
bandera = ''
uIlegal:any = {
  "userId": 1,
  "id": 99,
  "title": "delectus aut autem",
  "completed": false
}
validarUsuarios(){
  this.bandUsuario=undefined;
  this.service.getOneUsuario(this.id.value).subscribe({
    next: (data:any|JSON)=> {
      this.uIlegal=data;
      this.bandUsuario=true;
      console.log(this.bandUsuario);
      
  },
  error: (e)=>{
    console.log(e)
    this.bandUsuario=false;
}})
if(this.uIlegal.id == this.id.value){this.bandera='menu-maestro'}
if(this.uIlegal.id != this.id.value){this.bandera='menu'}
 
 console.log(this.bandUsuario)
 console.log(this.bandera)
}
enviarUsuario(){
  this.service.postUsuario(this.usuario.value).subscribe({
    next: (data)=> {console.log(data)},
    error: (e)=> {console.log(e);}
  });
  this.bandUsuario=undefined
}




}
