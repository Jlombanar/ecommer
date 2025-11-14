import Productos from "../models/Productos.js";

// Crear un nuevo producto
export const crearProducto = async (req, res) => {
  try {
    const { productId, Nombre, Descripcion, Precio, Imagen } = req.body;
    
    const newProduct = new Productos({
      productId,
      Nombre,
      Descripcion,
      Precio,
      Imagen
    });
    
    await newProduct.save();
    res.status(201).json({ message: "Producto ingresado exitosamente" });
  } catch (error) {
    console.error("Error al guardar el producto:", error);
    res.status(400).json({
      message: "Error al ingresar el producto",
      error: error.message
    });
  }
};

// Obtener todos los productos
export const obtenerProductos = async (req, res) => {
  try {
    const productos = await Productos.find();
    res.json(productos);
  } catch (error) {
    console.error("Error al obtener productos:", error);
    res.status(500).json({ 
      message: "Error al obtener los productos",
      error: error.message 
    });
  }
};

