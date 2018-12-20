const express = require('express');
const router = express.Router();
const avaliacaoController = require('../api/controllers/avaliacao');

router.get('/', avaliacaoController.getAll);
router.post('/', avaliacaoController.create);
router.get('/:id', avaliacaoController.getById);
router.put('/:id', avaliacaoController.updateById);
router.delete('/:id', avaliacaoController.deleteById);

module.exports = router;