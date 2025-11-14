import bcrypt from "bcrypt";
import  Users from "../models/Users.js";

export const registrarUsuario= async(req,res)=>{
    try {
    const { Nombre, Apellido, Telefono, Correo_Electronico, passwords } = req.body;

    // Validar que no falte ningún campo
    if (!Nombre || !Apellido || !Telefono || !Correo_Electronico || !passwords) {
      return res.status(400).json({ message: "Todos los campos son obligatorios." });
    }

    // Verificar si ya existe el correo
    const existeUsuario = await Users.findOne({ Correo_Electronico });
    if (existeUsuario) {
      return res.status(400).json({ message: "El correo ya está registrado." });
    }

    // Encriptar contraseña
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(passwords, saltRounds);

    // Crear y guardar usuario
    const nuevoUsuario = new Users({
      Nombre,
      Apellido,
      Telefono,
      Correo_Electronico,
      passwords: hashedPassword
    });

    await nuevoUsuario.save();
    res.status(201).json({ message: "Usuario registrado exitosamente." });

  } catch (error) {
    res.status(500).json({
      message: "Error al registrar el usuario.",
      error: error.message
    });
  }

};
