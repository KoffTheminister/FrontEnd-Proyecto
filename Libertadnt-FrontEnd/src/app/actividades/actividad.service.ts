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
  this.actividad={
    nombre: "",
    descripcion: "", 
    locacion: "", 
    diaDeLaSemana: 0, 
    horaInicio: 0, 
    horaFin: 0,
    estado: 0,
    cantidadMinima: 0,
    edadMinima: 0, 
    cod_sector: 0}
  this.actividades= []
  this.ilegal={}
  this.ilegales=[]

}  
private log(message: string) {
  this.messageService.add(`GuaridaService: ${message}`);
}
getActividades() {
  return this.http.get<any | JSON>("http://localhost:8080/actividades")
}
getOneActividad(id:any) {
  return this.http.get<any | JSON>("http://localhost:8080/actividades/"+`${id}`)
}
postActividad(uActual:any){
  return this.http.post<any| JSON>("http://localhost:8080/actividades",uActual)
}
putActividad(id:any,uActual:any){
  return this.http.put<any| JSON>("http://localhost:8080/actividades/"+`${id}`,uActual)
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
