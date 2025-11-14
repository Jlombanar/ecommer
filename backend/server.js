import express from 'express';
import cors from 'cors';
import "./db/db.js"
import ProductosRoute from "./routes/Productos.js";
import UsersRoutes from './routes/Users.js';
import  LoginUsuario  from  './routes/Login.js';



const app = express();
app.use(express.json());

// Habilitar CORS para todas las rutas
app.use(cors());

app.get('/', (req, res) => {
  res.send('Bienvenidos al curso de node express ');
});
app.use("/api/productos",ProductosRoute);
app.use("/api/users", UsersRoutes);
app.use("/api/login",LoginUsuario);





app.listen(8081, () => console.log('Servidor corriendo en http://localhost:8081'));
