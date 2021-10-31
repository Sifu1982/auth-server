const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');


const router = Router();

// Crear un nuevo usuario. NOTA: el callback crearUsuario se llama "controlador"
router.post('/new',
    // Array de middlewares -> Validadores que tienen que cumplir las rutas para ejecutarse. Se ejecutan de manera secuencial
    [
        // En este primer check se evalúa "name" y si no pasa los validadores not() y isEmpty(), se lanza el mensaje de error para cualquiera de las dos validaciones
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        // En este segundo validador se evalúa "email" y se lanza un mensaje personalizado de error para cada una de las validaciones que no pase
        check('email')
            .notEmpty().withMessage('El email es obligatorio')
            .isEmail().withMessage('El email no tiene un formato correcto'),
        check('password')
            .notEmpty().withMessage('La contraseña no puede venir vacía')
            .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
        validarCampos
    ]
    , crearUsuario);

// Login de usuario
router.post('/', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').isLength({ min: 6 }),
    validarCampos
], loginUsuario);

// Validar y revalidar token
router.get('/renew', validarJWT, revalidarToken);




module.exports = router;