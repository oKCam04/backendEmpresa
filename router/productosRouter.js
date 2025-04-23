const express = require('express');
const router = express.Router();
const ProductosController = require('../controllers/productoController');
const authMiddleware = require('../middleware/auth.middleware');


router.get('/productos',authMiddleware,ProductosController.getAll);
router.post('/productos',authMiddleware,ProductosController.create);
router.put('/productos/:id',authMiddleware,ProductosController.update);
router.delete('/productos/:id',authMiddleware,ProductosController.delete);
router.get('/productos/:id',authMiddleware,ProductosController.getById);

module.exports = router;