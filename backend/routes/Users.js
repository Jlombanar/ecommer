import express from "express";
import { registrarUsuario } from "../controllers/Users.js";

const router = express.Router();

// Ruta para registrar usuario
router.post("/register", registrarUsuario);

export default router;
