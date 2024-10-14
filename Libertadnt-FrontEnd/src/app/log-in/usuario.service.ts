import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

readonly api_url ='https://jsonplaceholder.typicode.com/todos/'
//readonly api_url ='tuma/usuarios/id'
messageService: any;
usuario:any
usuarios:any
usuarioEspecial:any
constructor(private http: HttpClient) {this.usuarios = [],this.usuario={},this.usuarioEspecial={}
 }  
private log(message: string) {
  this.messageService.add(`GuaridaService: ${message}`);
}
getUsuario() {
  return this.http.get<any | JSON>(this.api_url)
  
}
getOneUsuario(id:any) {
  return this.http.get<any | JSON>(this.api_url+`${id}`)
}
postUsuario(uActual:any){
  return this.http.post<any| JSON>(this.api_url,uActual)
}

}
