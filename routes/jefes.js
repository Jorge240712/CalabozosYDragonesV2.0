const express = require('express');
const router = express.Router();
const {
    obtenerJefes,
    obtenerJefePorId,
    obtenerJefesPorTipo,
    crearJefe,
    actualizarJefe,
    eliminarJefe
} = require('../controllers/jefesController');

// 🎫 Mini-ticket — agrega aquí la ruta GET para /filtrar
// pista: ¿recuerdas el quiz de Misión 21, pregunta 6? Una ruta con
// texto fijo (como /filtrar) SIEMPRE debe ir ANTES que una ruta con
// parámetro (como /:id), o Express la va a confundir con un id.


router.get('/', obtenerJefes);
router.get('/filtrar', obtenerJefesPorTipo);
router.get('/:id', obtenerJefePorId);
router.post('/', crearJefe);
router.put('/:id', actualizarJefe);
router.delete('/:id', eliminarJefe);

module.exports = router;