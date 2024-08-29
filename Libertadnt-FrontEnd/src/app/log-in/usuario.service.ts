import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

messageService: any;
constructor(
  private http: HttpClient) { }  
private log(message: string) {
  this.messageService.add(`GuaridaService: ${message}`);
}
getUsuario() {
  return this.http.get<any | JSON>("https://api.realworld.io/api/articles")
  
}
getOneUsuario(id:any) {
  return this.http.get<any | JSON>("https://api.realworld.io/api/articles"+{id})
}
postUsuario(uActual:any){
  return this.http.post<any| JSON>("https://api.realworld.io/api/articles",uActual)
}

}
