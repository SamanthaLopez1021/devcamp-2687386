const express =require('express')
const dotenv= require ('dotenv') //leer archivos env
const colors=require('colors')
const conectarDB = require('./config/db')
const bootcampRoutes= require('./routes/bootcampRoutes')


//vincular el archivo .env
dotenv.config(
    { path :'./config/.env'}
)
// 
conectarDB()

//construir el objeto de la app
app=express()
app.use(express.json())

app.use('/api/v1/devcamp/bootcamps',
        bootcampRoutes)

//rutas de prueba
app.get('/prueba',(request, response)=>{
    response.send("Hola")
})

app.get('/prueba/:id',(request, response)=>{
    response.send(`Hola, ${request.params.id }`)
})

//rutas de bootcamps 
//endpoint
//----------------------------------------- ENDPOINTS BOOTCAMPS



//--------------------------------- ENDPOINTS CURSOS ------------------------------
//listar todos los courses
app.get('/courses', (req, res)=>{
    res.json({
        success: true,
        message:"aqui se mostraran todos los courses"
    })
})

//traer curso por id
app.get('/courses/:id', (req, res)=>{
    res.json({
        success: true,
        message: `aqui se mostraran todos los courses cuyo id es ${req.params.id}`
    })
})

//crear un curso
app.post('/courses', (req, res)=>{
    res.json({
        success: true,
        message:"aqui se crearan todos los courses"
    })
})

//editar un curso por id 
app.put('/courses/:id', (req, res)=>{
    res.json({
        success: true,
        message: `aqui se actualizara todos los courses cuyo id es ${req.params.id}`
    })
})

//eliminar un curso por id 
app.delete('/courses/:id', (req, res)=>{
    res.json({
        success: true,
        message: `aqui se eliminara todos los courses cuyo id es ${req.params.id}`
    })
})

//funcion para llamar el puerto
app.listen( process.env.PUERTO,()=>{
    console.log(`Servidor en ejecucion ${process.env.PUERTO}`.bgCyan.bgBlack.bold)

})

