const express =require('express')
const BootcampModel = require('../models/bootcampModel')

const router=express.Router()

//traer todos los bootcmaps 
router.get('/', async (req, res)=>{
    //utilizar el modelo para seleccionar todos los bootcamps que hay en la base de datos
    const bootcamps=
        await BootcampModel.find()

    res.json({
        success: true,
        data: bootcamps
    })
})

//traer un bootcamp por id 
router.get('/:id', async (req, res)=>{
    //extraer el id del bootcampdel parametro de la url
    bootcampId = req.params.id
    const bootcamp=
        await BootcampModel.findById(bootcampId)

    
    res.json({
        success: true,
        data: bootcamp
    })
})

//crear un bootcamp
router.post('/', async (req, res)=>{
    //el nuevo bootcamp vendra a traves del body del cliente
    const newBootcamp = 
        await BootcampModel.create(req.body)

    res.json({
        success: true,
        data: newBootcamp
    })
})

//editar un bootcamp por id 
router.put('/:id',  async (req, res)=>{
    const bootcampId= req.params.id
    const updBootcamp =
        await BootcampModel.findByIdAndUpdate(bootcampId,req.body,{new:true})

    res.json({
        success: true,
        data:updBootcamp
    })
})

//eliminar un bootcamp
router.delete('/:id',  async (req, res)=>{
    const bootcampId= req.params.id
    const delBootcamp =
        await BootcampModel.findByIdAndDelete(bootcampId)

    res.json({
        success: true,
        data:delBootcamp
    })
})


module.exports= router 