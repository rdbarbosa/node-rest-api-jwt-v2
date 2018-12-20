const express = require('express');
const router = express.Router();
const flexibilidadeController = require('../api/controllers/flexibilidade');

router.get('/', flexibilidadeController.getAll);
router.post('/', flexibilidadeController.create);
router.get('/:id', flexibilidadeController.getById);
router.put('/:id', flexibilidadeController.updateById);
router.delete('/:id', flexibilidadeController.deleteById);

module.exports = router;