const express =require('express')
const dotenv= require ('dotenv') //leer archivos env
const colors=require('colors')
const conectarDB = require('./config/db')
const bootcampRoutes= require('./routes/bootcampRoutes')
const courseRoutes= require('./routes/coursesRoutes')
const reviewRoutes= require('./routes/reviewsRoutes')


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

app.use('/api/v1/devcamp/courses',
        courseRoutes)
app.use('/api/v1/devcamp/reviews',
        reviewRoutes)
        
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


//funcion para llamar el puerto
app.listen( process.env.PUERTO,()=>{
    console.log(`Servidor en ejecucion ${process.env.PUERTO}`.bgCyan.bgBlack.bold)

})

