const express = require('express');
const router = express.Router();
const velocidadeController = require('../api/controllers/velocidade');

router.get('/', velocidadeController.getAll);
router.post('/', velocidadeController.create);
router.get('/:id', velocidadeController.getById);
router.put('/:id', velocidadeController.updateById);
router.delete('/:id', velocidadeController.deleteById);

module.exports = router;