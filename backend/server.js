const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Inicialización de la aplicación Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json()); // Middleware para manejar JSON
app.use(express.urlencoded({ extended: true }));

// Definir el esquema y modelo de Mongoose para cada proyecto aplicado
const venta_de_motosSchema = new mongoose.Schema({
    producto: { type: String, required: true },
    categoria: { type: String, required: true },
    cantidad: { type: Number, required: true, min: 0 },
    precio: { type: Number, required: true, min: 0 }
}, { timestamps: true });  // Añadir timestamps para createdAt y updatedAt

const venta_de_motos  = mongoose.model('venta de motos', venta_de_motosSchema);
// Ruta GET para obtener todos los productos del inventario
app.get('/api/inventario', async (req, res) => {
    try {
        const productos = await venta_de_motos.find();  // Buscar todos los productos
        res.status(200).json(productos);  // Responder con los productos
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
});

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/venta_de_motos')
    .then(() => console.log('Conectado a MongoDB'))
    .catch(error => {
        console.error('Error al conectar a MongoDB:', error);
        process.exit(1);  // Salir si no se puede conectar a la base de datos
    });



