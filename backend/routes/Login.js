import express from "express";
import { LoginUsuario } from "../controllers/Login.js";

const router = express.Router();

router.post("/",LoginUsuario);

export default router;