const ProductosServices=require('../services/productoServices');

class ProductosController{

    static async getAll(req,res){
        try{
            const productos=await ProductosServices.getAll()
            res.status(200).json(productos)
        }catch(e){
            res.status(500).json({error:"Error al obtener los productos"})
        }
    }
    static async create(req,res){
        try{
            const {nombre,categoria,precio}=req.body
            const producto=await ProductosServices.create(nombre,categoria,precio)
            res.json(producto)
        }catch(e){
            res.status(500).json({error:"Error al crear el producto"})
        }
    }
    static async update(req,res){
        try{
            const {id}=req.params
            const {nombre,categoria,precio}=req.body
            const producto=await ProductosServices.update(id,nombre,categoria,precio)
            res.json({mensaje:"Producto actualizado"})
        }catch(e){
            res.status(500).json({error:"Error al actualizar el producto"})
        }
    }
    static async delete(req,res){
        try{
            const {id}=req.params
            const producto=await ProductosServices.delete(id)
            res.json({mensaje:"Producto eliminado"})
        }catch(e){
            res.status(500).json({error:"Error al eliminar el producto"})
        }
    }
}
module.exports=ProductosController;