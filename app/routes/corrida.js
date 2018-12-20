const express = require('express');
const router = express.Router();
const corridaController = require('../api/controllers/corrida');

router.get('/', corridaController.getAll);
router.post('/', corridaController.create);
router.get('/:id', corridaController.getById);
router.put('/:id', corridaController.updateById);
router.delete('/:id', corridaController.deleteById);

module.exports = router;