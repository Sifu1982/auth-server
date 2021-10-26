const express = require('express');



/**
 * 
 * Crear el servidor/aplicación de express
 * 
 */
const app = express();

// GET
app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Todo salió bien',
        usId: 12345
    })
});



// Levanto el servidor en el puerto 4000 y le paso el callback con la ejecución al ser levantado
app.listen(4000, () => {
    console.log(`Servidor corriendo en puerto ${4000}`);
});