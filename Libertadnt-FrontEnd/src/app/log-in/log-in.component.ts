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
bandera = ''
uPueba:any = {
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
cargarUsuarios(){
  let val = this.id.value
  this.service.getOneUsuario(val).subscribe({next: (data:any|JSON)=> {
    this.uPueba=data;
  }
  ,error: (e)=>{console.log(e)
    
}})
 
  /*this.service.postUsuario(this.usuario.value).subscribe({next: (data)=> {console.log(data)
  this.bandera= 'true';
 },
 error: (e)=> {console.log(e);
  this.bandera= 'false';
 }});*/

if(this.uPueba.id == this.id.value){this.bandera='true'}
if(this.uPueba.id != this.id.value){this.bandera='false'}
 console.log(this.uPueba)
 console.log(this.bandera)
}




}
