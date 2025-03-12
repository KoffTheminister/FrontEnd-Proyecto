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
      dia_de_la_semana: 0, 
      hora_inicio: 0, 
      hora_fin: 0,
      estado: 0,
      cantidad_minima: 0,
      edad_Minima: 0, 
      cod_sector: 0}
    this.actividades= []
    this.ilegal={
      nombre: "",
      descripcion: "", 
      locacion: "", 
      dia_de_la_semana: 0, 
      hora_inicio: 0, 
      hora_fin: 0,
      estado: 0,
      cantidad_maxima: 0
    }
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
  ///////ILEGALES/////////
  getIlegales() {
    return this.http.get<any | JSON>("http://localhost:8080/actividades_Ilegales")
  }
  getOneIlegal(id:any) {

    return this.http.get<any | JSON>("http://localhost:8080/actividades_ilegales/"+`${id}`)
  }
  postIlegal(uActual:any){
    uActual.dia_de_la_semana=Number.parseInt(uActual.dia_de_la_semana)
    return this.http.post<any| JSON>("http://localhost:8080/actividades_ilegales",uActual)
  }
  putIlegal(id:any,uActual:any){
    return this.http.put<any| JSON>("http://localhost:8080/actividades_ilegales/"+`${id}`,uActual)
  }
  InscribirActividadIlegal(actividad:any,recluso:any){
    let respuesta={
      cod_act_ilegal:actividad
      ,cod_recluso:recluso
    }
    return this.http.post<any| JSON>("http://localhost:8080/actividades_ilegales/inscripcion/"+`${actividad}`+"&"+`${recluso}`,respuesta)
  }
}
