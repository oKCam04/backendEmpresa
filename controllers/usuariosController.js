const UsuariosServices=require('../services/usuariosServices');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

class UsuariosController {
    static async login(req, res) {
        try{
            const {correo,contrasena}=req.body
            const rpCorreo=await UsuariosServices.login(correo)
            const compare=await bcrypt.compare(contrasena,rpCorreo.contrasena)
            if(compare){
                const token=jwt.sign({id:rpCorreo.id,correo:rpCorreo.correo},"secreto",{expiresIn:'1h'})
                res.json({mensaje:"Login exitoso",token,rpCorreo})
            }else{
                res.json({mensaje:"contrasena incorrecta"})
            }
        }catch(e){
            res.json({mensaje:"Error en el controller"})
        }
    }
    static async register(req,res){
        try{
            const {nombre,correo,contrasena}=req.body
            const contrasenaEncriptada=await bcrypt.hash(contrasena,10)
            const respuesta=await UsuariosServices.register(nombre,correo,contrasenaEncriptada)
            res.json(respuesta)
        }catch(e){
            res.json({mensaje:"Error en el controller"})
        }
        
    }
    static async getAll(req,res){
        try{
            const respuesta=await UsuariosServices.getAll()
            res.json(respuesta)
        }catch(e){
            res.json({mensaje:"Error en el controller"})
        }
    }
    

}
module.exports=UsuariosController;