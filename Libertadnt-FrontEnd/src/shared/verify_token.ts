// import jwt from 'jsonwebtoken'
// import { JwtPayload } from "jsonwebtoken"
// import { JWT_SECRET, JWT_SECRET_SPECIAL } from "./configjwt.js"

// export async function verificar_token_en_front(){
//     let token = sessionStorage.getItem('token')
//     if(!token){
//         return 0
//     }
//     try{
//         const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload & {
//             cod_administrador: number;
//             nombre: string;
//             apellido: string;
//             dni: string;
//             fecha_ini_contrato: string;
//             fecha_fin_contrato: string;
//             contrasenia: string
//         };
//         return 1
//     } catch(error: any){
//         try{
//             const decoded = jwt.verify(token, JWT_SECRET_SPECIAL) as JwtPayload & {
//                 cod_administrador: number;
//                 nombre: string;
//                 apellido: string;
//                 dni: string;
//                 fecha_ini_contrato: string;
//                 fecha_fin_contrato: string;
//                 contrasenia: string
//             }
//             return 1
//         } catch(error:any){
//             return 2
//         }
//     }
// } 

// comente esto para chequear si las funciones se estaban usando o no, y resulta ser que no se estan usando asu que no las borro pero en un tuempo habria que borrar el archivo cuando nos aseguremos que no sirve mas

// export async function verificar_token_special_en_front(){
//     let token = sessionStorage.getItem('token')
//     if(!token){
//         return 0
//     }
//     try{
//         const decoded = jwt.verify(token, JWT_SECRET_SPECIAL) as JwtPayload & {
//             cod_administrador: number;
//             nombre: string;
//             apellido: string;
//             dni: string;
//             fecha_ini_contrato: string;
//             fecha_fin_contrato: string;
//             contrasenia: string
//         }
//         return 1
//     } catch(error: any){
//         if(error.message == 'invalid token'){
//             return 2
//         } else if(error.message == 'expired token'){
//             return 3
//         } else {
//             return 4
//         }
//     }
// }       


