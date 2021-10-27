const express = require('express');
const cors = require('cors');



/**
 * 
 * Crear el servidor/aplicación de express
 * 
 * [DEFINICIÓN] MIDDLEWARE: todo lo que utilice el metodo use
 * 
 */
const app = express();

//CORS
app.use(cors());

// Lectura y parseo del body
app.use(express.json());

//Rutas
app.use('/api/auth', require('./routes/auth')); // use tiene dos parámetros, la ruta padre, y el archivo del que salen las rutas hijas



// Levanto el servidor en el puerto 4000 y le paso el callback con la ejecución al ser levantado
app.listen(4000, () => {
    console.log(`Servidor corriendo en puerto ${4000}`);
});