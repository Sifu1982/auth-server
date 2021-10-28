const { response } = require("express");
const { validationResult } = require("express-validator");



// Un middleware es una función que recibe como parámetros (req, res, next), a diferencia del controlador, que sólo recibe (req, res)

const validarCampos = (req, res = response, next) => {


    // Creo errors como un validationResult para obtener los resultados de los errores del middleware en la ruta
    const errors = validationResult(req);
    // console.log(errors);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }

    next();

}

module.exports = {
    validarCampos
}