import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

readonly api_url ='jsonplaceholder.typicode.com/todos/'
messageService: any;
constructor(
  private http: HttpClient) { }  
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
