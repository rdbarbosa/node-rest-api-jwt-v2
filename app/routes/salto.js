const express = require('express');
const router = express.Router();
const saltoController = require('../api/controllers/salto');

router.get('/', saltoController.getAll);
router.post('/', saltoController.create);
router.get('/:id', saltoController.getById);
router.put('/:id', saltoController.updateById);
router.delete('/:id', saltoController.deleteById);

module.exports = router;