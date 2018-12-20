const express = require('express');
const router = express.Router();
const imcController = require('../api/controllers/imc');

router.get('/', imcController.getAll);
router.post('/', imcController.create);
router.get('/:id', imcController.getById);
router.get('/sexo/:sexo', imcController.getBySex);
router.put('/:id', imcController.updateById);
router.delete('/:id', imcController.deleteById);

module.exports = router;