import { Sentencia } from "./sentencia-interface.js"

export interface Condena {
      cod_condena : number,
      cod_recluso: number,
      fecha_ini: Date, 
      fecha_fin_estimada: Date,
      fecha_fin_real : Date,
      sentencias: Sentencia[]
}