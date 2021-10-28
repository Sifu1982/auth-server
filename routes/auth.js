const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');


const router = Router();

// Crear un nuevo usuario. NOTA: el callback se llama "controlador"
router.post('/new', crearUsuario);

// Login de usuario
router.post('/', [  // Array de middlewares -> Validadores que tienen que cumplir las rutas para ejecutarse
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').isLength({ min: 6 })
], loginUsuario);

// Validar y revalidar token
router.get('/renew', revalidarToken);




module.exports = router;