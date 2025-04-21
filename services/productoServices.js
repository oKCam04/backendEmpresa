const {Productos}=require('../models');

class ProductosServices{
    static async getAll(){
        try{
            const productos=await Productos.findAll()
            return productos
        }catch(e){
            console.log("Error en el servicio de obtener productos: ", e);
        }
    }
    static async create(nombre,categoria,precio){
        try{
            const producto=await Productos.create({nombre,categoria,precio})
            return producto
        }catch(e){
            console.log("Error en el servicio de crear producto: ", e);
        }
    }
    static async update(id,nombre,categoria,precio){
        try{
            const producto=await Productos.update({nombre,categoria,precio},{where:{id}})
            return producto
        }catch(e){
            console.log("Error en el servicio de actualizar producto: ", e);
        }
    }
    static async delete(id){
        try{
            const producto=await Productos.destroy({where:{id}})
            return producto
        }catch(e){
            console.log("Error en el servicio de eliminar producto: ", e);
        }
    }
}

module.exports=ProductosServices;