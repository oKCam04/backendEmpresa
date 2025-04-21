const {Usuarios} = require('../models');

class UsuariosServices {
    static async login(correo){
        try{
            const user=await Usuarios.findOne({where:{correo}})
            return user
        }catch(e){
            console.log("Error en el servicio de login: ", e);
        }
    }
    static async register(nombre,correo,contrasena){
        return await Usuarios.create({nombre,correo,contrasena}) 
    }

    static async getAll(){
        return await Usuarios.findAll()
    }
}

module.exports=UsuariosServices;