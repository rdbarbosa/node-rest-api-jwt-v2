const express = require('express');
const router = express.Router();
const agilidadeController = require('../api/controllers/agilidade');

router.get('/', agilidadeController.getAll);
router.post('/', agilidadeController.create);
router.get('/:id', agilidadeController.getById);
router.put('/:id', agilidadeController.updateById);
router.delete('/:id', agilidadeController.deleteById);

module.exports = router;