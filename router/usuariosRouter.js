const express=require('express');
const router=express.Router();
const UsuariosController=require('../controllers/usuariosController')
const authMiddleware=require('../middleware/auth.middleware')

router.post('/register',UsuariosController.register)
router.post('/login',UsuariosController.login)
router.get('/usuarios',authMiddleware,UsuariosController.getAll)

module.exports=router;