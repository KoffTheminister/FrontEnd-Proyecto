import { Actividad } from "./actividad-interface";
import { Celda } from "./celda-interface.js";
import { Condena } from "./condena-interface";
import { Ilegal } from "./ilegal-interface";

export interface Recluso {
        cod_recluso: number,
        nombre:string,
        apellido:string,
        dni:number, 
        fecha_nac:string,
        actividades: Actividad[],
        actividades_ilegales: Ilegal[],
        condenas: Condena[],
        celda: Celda | null

}