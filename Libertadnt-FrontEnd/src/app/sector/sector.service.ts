import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SectorService {

  readonly api_url ='https://jsonplaceholder.typicode.com/posts'
messageService: any;
sectores:any
sector:any
constructor(
private http: HttpClient) {
  this.sector={nombre:String,cod_sector:Number,descipcion:String}
  this.sectores= []
 }  
private log(message: string) {
  this.messageService.add(`GuaridaService: ${message}`);
}
getSectores() {
  return this.http.get<any | JSON>(this.api_url)
  
}
getOneSector(id:any) {
  return this.http.get<any | JSON>(this.api_url+`${id}`)
}
postSector(uActual:any){
  return this.http.post<any| JSON>(this.api_url,uActual)
}
}
