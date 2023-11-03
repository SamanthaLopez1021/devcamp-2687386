const mongoose =require('mongoose')
const colors= require('colors') 

const conectarDB = async() =>{
    await mongoose.connect(process.env.MONGO_URL)
    console.log("MongoDB Conectado".bgMagenta.black.bold)
}

module.exports=conectarDB