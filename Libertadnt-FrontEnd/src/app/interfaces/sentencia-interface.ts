import { Condena } from "./condena-interface";
import { Sector } from "./sector-interface";

export interface Sentencia {
      cod_sentencia :number, 
      nombre :string, 
      descripcion: string, 
      duracion_anios:number,
      orden_de_gravedad:number,
      condenas:Condena[],
      sectores:Sector[]
      
}