const express = require('express');
const router = express.Router();

const {
    obtenerObjetos,
    obtenerObjetoPorId,
    obtenerObjetosPorTipo,
    crearObjeto,
    actualizarObjeto,
    eliminarObjeto
} = require('../controllers/objetosController');

// GET /objetos
router.get('/', obtenerObjetos);

// GET /objetos/filtrar?tipo=Arma
router.get('/filtrar', obtenerObjetosPorTipo);

// GET /objetos/:id
router.get('/:id', obtenerObjetoPorId);

// POST /objetos
router.post('/', crearObjeto);

// PUT /objetos/:id
router.put('/:id', actualizarObjeto);

// DELETE /objetos/:id
router.delete('/:id', eliminarObjeto);

module.exports = router;