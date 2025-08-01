import { Administrador } from "../../administrador/administrador.entity.js"

declare global {
    namespace Express {
        interface Request {
            administrador?: {
                cod_administrador: req.body.cod_administrador
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                dni: req.body.dni,
                fecha_ini_contrato: req.body.fecha_ini_contrato,
                fecha_fin_contrato: req.body.fecha_fin_contrato,
                contrasenia: req.body.contrasenia
            }
        }
    }
}


