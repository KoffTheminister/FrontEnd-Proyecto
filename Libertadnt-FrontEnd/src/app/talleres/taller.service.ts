import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TallerService {
  readonly api_url="https://jsonplaceholder.typicode.com/todos/"
 
  taller: any
  talleres:any 
  messageService: any;
  constructor(private http: HttpClient) {this.talleres =  [],
    this.taller={cantidad:Number,
      cantMax:Number,
      cantMin:Number,
      estado:String,
      nombre:String,
      descipcion:String,
      cod_actividad:Number,
      locacion:String,
      hora:String,
      diaDeLaSemana:Date}
   }  
  private log(message: string) {
  this.messageService.add(`GuaridaService: ${message}`);
}

getTalleres() {
  return this.http.get<any[] | JSON>(this.api_url)
}
validarTaller(tAtual:any){
  this.getTalleres().subscribe({
    next:(data)=>{this.talleres=data},
    error:(e)=>{console.log(e)}})
  console.log(this.talleres)
  let encontrado = this.talleres.find((element:any) => element==tAtual );
  if(encontrado !== undefined){
    return true;
  }
  return false
}
postTaller(x:any){
  return this.http.post<any|JSON>(this.api_url,x);
}
getOneTaller(id:number) {
  return this.http.get<any | JSON>(this.api_url+`${id}`);
}

  
}
