const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');


const router = Router();

// Crear un nuevo usuario. NOTA: el callback crearUsuario se llama "controlador"
router.post('/new',
    // Array de middlewares -> Validadores que tienen que cumplir las rutas para ejecutarse
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email')
            .notEmpty().withMessage('El email es obligatorio')
            .isEmail().withMessage('El email no tiene un formato correcto'),
        check('password')
            .notEmpty().withMessage('La contraseña no puede venir vacía')
            .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres')
    ]
    , crearUsuario);

// Login de usuario
router.post('/', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').isLength({ min: 6 })
], loginUsuario);

// Validar y revalidar token
router.get('/renew', revalidarToken);




module.exports = router;