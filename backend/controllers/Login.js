import bcrypt from "bcrypt";
import Users from "../models/Users.js";

export const LoginUsuario=async(req,res)=>{
    try {
        const {Correo_Electronico,passwords}=req.body;
        
        //validamos que los campos esten presentes 
        if (!Correo_Electronico||!passwords){
            return res.status(400).json({message:" Correo y contraseña son obligatorios"});
        }
        //buscamos el  el  usuario bd
        const usuario= await Users.findOne({Correo_Electronico});
        if(!usuario){
            return res.status(404).json({message:" Usuario no encontrado"});
        
        }
        // comparar las contraseñas scriptada en la bd
        const passwordsValida= await bcrypt.compare(passwords,usuario.passwords);
        if(!passwordsValida){
            return res.status(401).json({message:" Contraseña incorrecta"});
        }
        // validar inicio exitoso 
        res.status(200).json({message:" Inicio de sesion correcto"});
    } catch (error) {
       res.status(500).json({message:" error al iniciar sesion",error:error.message});
    }
};