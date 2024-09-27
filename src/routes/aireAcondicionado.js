const express = require('express');
const router = express.Router();
const aireAcondicionadoController = require('../controllers/aireAcondicionado');

router.get('/all', aireAcondicionadoController.getAires);
router.get('/:id', aireAcondicionadoController.getAire);
router.post('/', aireAcondicionadoController.createAire);
router.put('/:id', aireAcondicionadoController.updateAire);
router.delete('/:id', aireAcondicionadoController.deleteAire);

module.exports = router;