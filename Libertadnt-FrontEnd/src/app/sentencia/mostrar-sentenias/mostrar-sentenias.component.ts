import { Component } from '@angular/core';
import { SentenciasService } from '../sentencias.service.js';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mostrar-sentenias',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mostrar-sentenias.component.html',
  styleUrl: './mostrar-sentenias.component.css'
})
export class MostrarSenteniasComponent {
  constructor (private service : SentenciasService){}
  id = '';
  ban = true;
  sentencias: any= [];
  pruebaSentencia:any =[1,2,34,5,"vamos newels",6,7,{mesi:'messi'}];
  uno = [];
  validarband(){
    if(this.id !!= ''){
      this.ban = false;
    }
    console.log(this.id)
  }
  
  buscarSentencias(){
    //return this.service.getSentencias().subscribe((x:any) => this.sentencias = x)
    return this.sentencias = this.pruebaSentencia
  }

  buscarUnaSentencia(id:any){
     //this.service.getOneSentencias(id.value).subscribe((x:any) => this.sentencias = x)
    this.buscarSentencias();
    const found = this.sentencias.find((element:any) => (element === id ));
    console.log(found);
    return this.uno =found;

  }

}
