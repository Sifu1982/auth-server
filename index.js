const express = require('express');
const cors = require('cors');
const path = require('path');


const { dbConnection } = require('./db/config');
require('dotenv').config(); // Con esta importación estoy cargando las variables de entorno del archivo .env

// console.log(process.env); // Esto es todo lo que node está ejecutando como variables de entorno

/**
 * 
 * Crear el servidor/aplicación de express
 * 
 * [DEFINICIÓN] MIDDLEWARE: todo lo que utilice el metodo use
 * 
 */
const app = express();

//Base de datos
dbConnection();

// Directorio público
app.use(express.static('public'));

//CORS
app.use(cors());

// Lectura y parseo del body
app.use(express.json());

//Rutas
app.use('/api/auth', require('./routes/auth')); // use tiene dos parámetros, la ruta padre, y el archivo del que salen las rutas hijas

// Manejar demás rutas
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

// Levanto el servidor en el puerto 4000 y le paso el callback con la ejecución al ser levantado
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});