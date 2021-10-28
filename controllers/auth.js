// Truco opcional para poder "tipar" res como response. Se importa response y se iguala res a response
const { response } = require('express');
const Usuario = require('../models/Usuario')


const crearUsuario = async (req, res = response) => {
    // console.log(req.body);


    const { email, name, password } = req.body;
    // console.log(email, name, password);

    try {

        // Verificar el email
        const usuario = await Usuario.findOne({ email });

        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe con ese email'
            });
        }

        // Crear usuario con el modelo
        const dbUser = new Usuario(req.body);

        // Hashear o encriptar la contraseña

        // Generar el JWT (Jason Web Token)

        // Crear usuario de DB
        await dbUser.save();

        // Generar respuesta exitosa
        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name,
        })

    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }

}

const loginUsuario = (req, res = response) => {

    const { email, password } = req.body;
    // console.log(email, password);

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