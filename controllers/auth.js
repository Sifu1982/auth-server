// Truco opcional para poder "tipar" res como response. Se importa response y se iguala res a response
const { response } = require('express');
const { validationResult } = require('express-validator');


const crearUsuario = (req, res = response) => {
    // console.log(req.body);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }

    const { email, name, password } = req.body;
    console.log(email, name, password);

    return res.json({
        ok: true,
        msg: 'Crear usuario /new'
    });
}

const loginUsuario = (req, res = response) => {

    // Creo errors como un validationResult para obtener los resultados de los errores del middleware en la ruta
    const errors = validationResult(req);
    // console.log(errors);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

    const { email, password } = req.body;
    console.log(email, password);

    return res.json({
        ok: true,
        msg: 'Login de usuario /'
    });
}

const revalidarToken = (req, res = response) => {
    return res.json({
        ok: true,
        msg: 'Renew'
    });
}


module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}