import { Actividad } from "./actividad-interface.js";
import { Recluso } from "./recluso-interface.js";
import { Sentencia } from "./sentencia-interface.js";
import { Turno } from "./turno-interface.js";

export interface Sector {
    nombre: string,
    descripcion: string, 
    turnos: Turno[] | null,
    sentencias: Sentencia[] | null,
    actividades: Actividad[] | null

}

