const express = require('express');
const router = express.Router();
const resistenciaController = require('../api/controllers/resistencia');

router.get('/', resistenciaController.getAll);
router.post('/', resistenciaController.create);
router.get('/:id', resistenciaController.getById);
router.put('/:id', resistenciaController.updateById);
router.delete('/:id', resistenciaController.deleteById);

module.exports = router;