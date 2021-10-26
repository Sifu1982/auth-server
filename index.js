const express = require('express');



/**
 * 
 * Crear el servidor/aplicación de express
 * 
 */
const app = express();

//Rutas
// use tiene dos parámetros, la ruta padre, y el archivo del que salen las rutas hijas
app.use('/api/auth', require('./routes/auth'));



// Levanto el servidor en el puerto 4000 y le paso el callback con la ejecución al ser levantado
app.listen(4000, () => {
    console.log(`Servidor corriendo en puerto ${4000}`);
});