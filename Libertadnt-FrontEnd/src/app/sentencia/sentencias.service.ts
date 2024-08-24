import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SentenciasService {

  messageService: any;
  constructor(
    private http: HttpClient) { }  
private log(message: string) {
  this.messageService.add(`GuaridaService: ${message}`);

}

getSentencias() {
  return this.http.get<any | JSON>("https://api.realworld.io/api/articles")
  
}
getOneSentencias(id:any) {
  return this.http.get<any | JSON>("https://api.realworld.io/api/articles"+{id})
}
postSentencias(sActual:any){
  return this.http.post<any| JSON>("https://api.realworld.io/api/articles",sActual)
}

}
