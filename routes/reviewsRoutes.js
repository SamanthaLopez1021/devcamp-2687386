const express =require('express')
const ReviewModel = require('../models/reviewModels')
const mongoose = require('mongoose')
const router=express.Router()

//traer todos los reviews
router.get('/', async (req, res)=>{
    //utilizar el modelo para seleccionar todos los bootcamps que hay en la base de datos
    try {
        const reviews=
            await ReviewModel.find()
        if (reviews.length > 0) {
            res.
            status(200).
            json({
                success: true,
                data: reviews
            })
            
        }else{
            res.
            status(400).
            json({
                success:false,
                message: 'No hay reviews'
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

router.get('/:id', async (req, res)=>{

    try {
        reviewId = req.params.id

        if(!mongoose.Types.ObjectId.isValid(reviewId)){
            res
            .status(500)
            .json({
              success: false,
              msg: "identificador invalido"
            })
       }else{
        const review=
        await ReviewModel.findById(reviewId)
    
            if(review){
                res.
                    status(200).
                    json({
                        success: true,
                        data: review
                    })

            }
            else{
                res.
                status(400).
                json({
                    success:false,
                    message: `No hay review cuyo id es:${reviewId}`
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
 
    try {
        const newReview = 
        await ReviewModel.create(req.body)

        res.
        status(201)
        .json({
         success: true,
         data: newReview
        })
        
    } catch (error) {
        res.status(400)
            .json({
                success:false,
                message:error.message
            })
        
    }
   
})


//editar un bootcamp por id 
router.put('/:id',  async (req, res)=>{

    try {
        const reviewId = req.params.id
        if(!mongoose.Types.ObjectId.isValid(reviewId)){
            res
            .status(500)
            .json({
              success: false,
              msg: "identificador invalido"
            })
        }else{

            const updReview =
                await ReviewModel.findByIdAndUpdate(
                    reviewId,
                    req.body,
                    {
                        new:true
                    })
            if(updReview){
                res.
                status(200).
                json({
                    success: true,
                    data:updReview
                })
            }else{
                res.
                status(400).
                json({
                    success:false,
                    message: `No hay review cuyo id es:${reviewId}`
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

//eliminar un bootcamp
router.delete('/:id',  async (req, res)=>{

    try {
        const reviewId = req.params.id
        if(!mongoose.Types.ObjectId.isValid(reviewId)){
            res
            .status(500)
            .json({
              success: false,
              msg: "identificador invalido"
            })
        }
        else{
            const delReview =
            await ReviewModel.findByIdAndDelete(reviewId)
            if(delReview){
                res.
                status(200).
                json({
                    success: true,
                    data:delReview
                })
            }else{
                res.
                status(400).
                json({
                    success:false,
                    message: `No hay review cuyo id es:${reviewId}`
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