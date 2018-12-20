const express = require('express');
const router = express.Router();
const pessoaController = require('../api/controllers/pessoa');

router.get('/', pessoaController.getAll);
router.post('/', pessoaController.create);
router.get('/:id', pessoaController.getById);
router.put('/:id', pessoaController.updateById);
router.delete('/:id', pessoaController.deleteById);

module.exports = router;