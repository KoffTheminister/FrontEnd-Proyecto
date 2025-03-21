import jwt from 'jsonwebtoken'
import { JwtPayload } from "jsonwebtoken"
import dotenv from 'dotenv'

dotenv.config()
const JWT_SECRET = process.env['JWT_SECRET'] as string

export async function verificar_token(){
    let token = sessionStorage.getItem('token')
    if(!token){
        return 0 //missing token
    }
    try{
        const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload & {
            cod_administrador: number;
            nombre: string,
            apellido: string,
            dni: string,
            fecha_ini_contrato: string,
            fecha_fin_contrato: string,
            contrasenia: string,
            es_especial: boolean
        }
        if(decoded.es_especial){
            return 1 //special user
        } else {
            return 2 //average user
        }
    } catch(error: any){
        if(error.message == 'expired token'){
            return 3 //expired token
        } else {
            return 4 //invalid token
        }
    }
}



