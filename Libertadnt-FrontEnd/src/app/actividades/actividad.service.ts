import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {

readonly api_url ='https://jsonplaceholder.typicode.com/todos/'
readonly ilegal_url = 'https://jsonplaceholder.typicode.com/todos/'
messageService: any;
actividades:any
actividad:any
ilegal:any
ilegales:any
constructor(private http: HttpClient) {
  this.actividad={descipcion:String,cod_actividad:Number,locacion:String,hora:String,diaDeLaSemana:Date }
  this.actividades= []
  this.ilegal={}
  this.ilegales=[]

}  
private log(message: string) {
  this.messageService.add(`GuaridaService: ${message}`);
}
getActividades() {
  return this.http.get<any | JSON>(this.api_url)
}
getOneActividad(id:any) {
  return this.http.get<any | JSON>(this.api_url+`${id}`)
}
postActividad(uActual:any){
  return this.http.post<any| JSON>(this.api_url,uActual)
}
getIlegales() {
  return this.http.get<any | JSON>(this.ilegal_url)
}
getOneIlegal(id:any) {
  return this.http.get<any | JSON>(this.ilegal_url+`${id}`)
}
postIlegal(uActual:any){
  return this.http.post<any| JSON>(this.ilegal_url,uActual)
}
}
