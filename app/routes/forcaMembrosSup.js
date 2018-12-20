const express = require('express');
const router = express.Router();
const forcaController = require('../api/controllers/forcaMembrosSup');

router.get('/', forcaController.getAll);
router.post('/', forcaController.create);
router.get('/:id', forcaController.getById);
router.put('/:id', forcaController.updateById);
router.delete('/:id', forcaController.deleteById);

module.exports = router;