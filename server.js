const express =require('express')
const dotenv= require ('dotenv') //leer archivos env
const colors=require('colors')
//construir el objeto de la app

//vincular el archivo .env
dotenv.config(
    { path :'./config/.env'}
)
app=express()

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
//traer todos los bootcmaps 
app.get('/bootcamps', (req, res)=>{
    res.json({
        success: true,
        message:"aqui se mostraran todos los bootcamps"
    })
})

//traer un bootcamp por id 
app.get('/bootcamps/:id', (req, res)=>{
    res.json({
        success: true,
        message: `aqui se mostraran todos los bootcamps cuyo id es ${req.params.id}`
    })
})

//crear un bootcamp
app.post('/bootcamps', (req, res)=>{
    res.json({
        success: true,
        message:"aqui se crearan todos los bootcamps"
    })
})

//editar un bootcamp por id 
app.put('/bootcamps/:id', (req, res)=>{
    res.json({
        success: true,
        message: `aqui se actualizara todos los bootcamps cuyo id es ${req.params.id}`
    })
})

//eliminar un bootcamp por id 
app.delete('/bootcamps/:id', (req, res)=>{
    res.json({
        success: true,
        message: `aqui se eliminara todos los bootcamps cuyo id es ${req.params.id}`
    })
})
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

