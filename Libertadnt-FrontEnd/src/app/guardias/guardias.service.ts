import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GuardiasService {
  readonly api_url="https://jsonplaceholder.typicode.com/users/"
  guardias:any 
  messageService: any;
  constructor(private http: HttpClient) {this.guardias =  [] }  
  private log(message: string) {
  this.messageService.add(`GuaridaService: ${message}`);
}

getGuardias() {
  return this.http.get<any[] | JSON>(this.api_url)
}
postGuardia(x:any){
  return this.http.post<any|JSON>(this.api_url,x);
}
getOneGuardias(id:number) {
  return this.http.get<any | JSON>(this.api_url+id);
}
}
