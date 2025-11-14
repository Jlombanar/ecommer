import mongoose from "mongoose";

const uri = "mongodb+srv://adsotarde:adsotarde@adsotarde.ech1xrh.mongodb.net/ECOMMER?retryWrites=true&w=majority";

mongoose.connect(uri)
.then(() => console.log("✅ conectado a la base de datos"))
.catch(err => console.error("❌error de  al conectar  a la base datos",err));