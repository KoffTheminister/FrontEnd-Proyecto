import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GuardiasService {
  
  messageService: any;
  constructor(
    private http: HttpClient) { }  
private log(message: string) {
  this.messageService.add(`GuaridaService: ${message}`);
}

getGuardias() {
  return this.http.get<any | JSON>("https://api.realworld.io/api/articles")
}
postGuardia(x:any){
  return this.http.post<any|JSON>("https://api.realworld.io/api/articles",x);
}
}
