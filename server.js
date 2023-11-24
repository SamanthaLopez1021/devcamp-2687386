const express = require('express')
const dotenv = require ('dotenv') //leer archivos env
const colors =require('colors')
const conectarDB = require('./config/db')
const bootcampRoutes = require('./routes/bootcampRoutes')
const courseRoutes = require('./routes/coursesRoutes')
const reviewRoutes = require('./routes/reviewsRoutes')
const userRoutes = require('./routes/userRoutes')
const cookieParser = require('cookie-parser')


//vincular el archivo .env
dotenv.config(
    { path :'./config/.env'}
)
// 
conectarDB()

//construir el objeto de la app
app=express()
app.use(express.json())
app.use(cookieParser())

app.use('/api/v1/devcamp/bootcamps',
        bootcampRoutes)

app.use('/api/v1/devcamp/auth',
        userRoutes)

app.use('/api/v1/devcamp/courses',
        courseRoutes)
app.use('/api/v1/devcamp/reviews',
        reviewRoutes)
        

//rutas de bootcamps 
//endpoint
//----------------------------------------- ENDPOINTS BOOTCAMPS



//--------------------------------- ENDPOINTS CURSOS ------------------------------
//listar todos los courses


//funcion para llamar el puerto
app.listen( process.env.PUERTO,()=>{
    console.log(`Servidor en ejecucion ${process.env.PUERTO}`.bgCyan.bgBlack.bold)

})

