import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SectorService {

  readonly api_url ='https://jsonplaceholder.typicode.com/posts'
  readonly celda_url ='https://jsonplaceholder.typicode.com/users/'
messageService: any;
sectores:any
sector:any
celdas:any
celda:any
constructor(
private http: HttpClient) {
  this.sector={nombre:String,cod_sector:Number,descipcion:String}
  this.sectores= []
  this.celda={capacidad:Number,cod_celda:Number,descipcion:String}
  this.celdas= []
 }  
private log(message: string) {
  this.messageService.add(`GuaridaService: ${message}`);
}
getSectores() {
  return this.http.get<any | JSON>(`${environment.API_URL}`+"sectores")
  
}
getOneSector(id:any) {
  return this.http.get<any | JSON>(`${environment.API_URL}`+"sectores/"+`${id}`)
}
postSector(uActual:any){
  return this.http.post<any| JSON>(`${environment.API_URL}`+"sectores",uActual)
}
getCeldasDSeSector(id:any) {
  return this.http.get<any | JSON>(`${environment.API_URL}`+"sectores/celdas/"+`${id}`)
  
}
getTuenosDSeSector(cod_sector:any) {
  return this.http.get<any | JSON>(`${environment.API_URL}`+"turnos/"+`${cod_sector}`)
  
}
getOneCeldaDeSector(idSector:any,idCelda:any) {
  return this.http.get<any | JSON>(this.celda_url+`${idSector}`+`${idCelda}`)
}
postTurno(uActual:any){
  return this.http.post<any| JSON>(`${environment.API_URL}`+"turnos",uActual)
}
putBajaTurno(cod_guardia:any,cod_sector:any,turno:any){
  let respuesta={
    cod_guardia: cod_guardia,
    cod_sector: cod_sector,
    turno: turno}
  console.log(respuesta)
  return this.http.put<any | JSON>(`${environment.API_URL}`+"turnos",respuesta)
}



}
