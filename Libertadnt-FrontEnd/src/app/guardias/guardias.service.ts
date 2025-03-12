import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GuardiasService {
  readonly api_url="https://jsonplaceholder.typicode.com/todos/"
  guardia: any
  guardias:any //
  messageService: any;
  constructor(private http: HttpClient) {this.guardias =  [],
    this.guardia={
      nombre: "",
      apellido: "", 
      dni: 0
    }
  }  

  getGuardias() {
    const token = localStorage.getItem('token');  
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.get<any | JSON>("http://localhost:8080/guardias", {headers})
  }
  postGuardia(x:any){
    return this.http.post<any|JSON>("http://localhost:8080/guardias",x);
  }

  putFinalizarGuardia(x:any){
    return this.http.put<any | JSON>("http://localhost:8080/guardias/finalizarContrato",x);
  }

  getOneGuardias(id:number) {
    return this.http.get<any | JSON>("http://localhost:8080/guardias/"+`${id}`);
  }
}



