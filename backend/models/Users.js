import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
  Nombre: { type: String, required: true },
  Apellido: { type: String, required: true },
  Telefono: { type: Number, required: true },
  Correo_Electronico: { type: String, required: true },
  passwords: { type: String, required: true, minlength: 8 }
});

// Forzamos que se use la colección "User"
const Users = mongoose.model("Users", UsersSchema, "Users");

export default Users;
