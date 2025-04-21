const express=require('express');
const app=express();
const cors=require('cors');

const env=require('dotenv');
env.config();
//cors 
app.use(cors({ 
    origin:"*",
    methods:["GET","POST","PUT","DELETE"],
    allowedHeaders:["Content-Type","Authorization"]
}));
//express.json
app.use(express.json());

//ruta
const usuariosRouter=require('./router/usuariosRouter')
const productosRouter=require('./router/productosRouter')
app.use('/api',usuariosRouter)
app.use('/api',productosRouter)


//server
const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
