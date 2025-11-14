import mongoose from "mongoose";
const productShema = new mongoose.Schema({
    productId:{ type:String,required:true,unique:true},
    Nombre:{type: String,required:true},
    Descripcion:{type: String,required:true},
    Precio: {type: Number,required:true},
    Imagen : {type: String,required:true}

});

// Forzamos que se ingrese a la coleccion que esta creada
const Product = mongoose.model("Productos", productShema, "Productos");

export default Product;