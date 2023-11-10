const express =require('express')
const CourseModel = require('../models/courseModel')
const mongoose = require('mongoose')
const router=express.Router()

//traer todos los cursos
router.get('/', async (req, res)=>{
    //utilizar el modelo para seleccionar todos los bootcamps que hay en la base de datos
    try {
        const courses=
            await CourseModel.find()
        if (courses.length > 0) {
            res.
            status(200).
            json({
                success: true,
                data: courses
            })
            
        }else{
            res.
            status(400).
            json({
                success:false,
                message: 'No hay cursos'
            })

        }

        
    } catch (error) {
        res.status(400)
            .json({
                success:false,
                message: error.message
            })
    }
    
  
})

//traer un curso por id 
router.get('/:id', async (req, res)=>{
    //extraer el id del bootcampdel parametro de la url
    try {
        courseId = req.params.id

        if(!mongoose.Types.ObjectId.isValid(courseId)){
            res
            .status(500)
            .json({
              success: false,
              msg: "identificador invalido"
            })
       }else{
        const course=
        await CourseModel.findById(courseId)
    
            if(course){
                res.
                    status(200).
                    json({
                        success: true,
                        data: course
                    })

            }
            else{
                res.
                status(400).
                json({
                    success:false,
                    message: `No hay curso cuyo id es:${courseId}`
                })
            }
    
        }
       
        
    } catch (error) {
        res.status(400)
            .json({
                success:false,
                data:error.message
            })
        
    }

   
})

router.post('/', async (req, res)=>{
    //el nuevo bootcamp vendra a traves del body del cliente
    try {
        const newCourse = 
        await CourseModel.create(req.body)

        res.
        status(201)
        .json({
         success: true,
         data: newCourse
        })
        
    } catch (error) {
        res.status(400)
            .json({
                success:false,
                message:error.message
            })
        
    }
   
})

router.put('/:id',  async (req, res)=>{

    try {
        const courseId = req.params.id
        if(!mongoose.Types.ObjectId.isValid(courseId)){
            res
            .status(500)
            .json({
              success: false,
              msg: "identificador invalido"
            })
        }else{

            const updCourse =
                await CourseModel.findByIdAndUpdate(
                    courseId,
                    req.body,
                    {
                        new:true
                    })
            if(updCourse){
                res.
                status(200).
                json({
                    success: true,
                    data:updCourse
                })
            }else{
                res.
                status(400).
                json({
                    success:false,
                    message: `No hay curso cuyo id es:${courseId}`
                })
            }
          
       
        }
        
        
    } catch (error) {
        res.status(400)
        .json({
            success:false,
            message:error.message
        })
    }
    
    
})
//eliminar un cursp
router.delete('/:id',  async (req, res)=>{

    try {
        const courseId = req.params.id
        if(!mongoose.Types.ObjectId.isValid(courseId)){
            res
            .status(500)
            .json({
              success: false,
              msg: "identificador invalido"
            })
        }
        else{
            const delCourse =
            await CourseModel.findByIdAndDelete(courseId)
            if(delCourse){
                res.
                status(200).
                json({
                    success: true,
                    data:delCourse
                })
            }else{
                res.
                status(400).
                json({
                    success:false,
                    message: `No hay bootcamp cuyo id es:${courseId}`
                })
            }
    
        }
        
    } catch (error) {
        res.status(400)
        .json({
            success:false,
            message:error.message
        })
    }
       
        
    
        
    })
    

module.exports= router 