const express = require('express')
const UserModel = require  ('../models/usersModel')
const router = express.Router()
const mongoose = require  ('mongoose')

// registro de usuarios
router.post('/register', async (req,res)=> {

    try{
        const user = await UserModel.create(req.body)

        res.status(201).json({
            success: true,
            data: user
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
        
    }
  
})

//inicio de sesion
router.post('/login', async (req,res)=> {
//1.No llega email o password
const {email, password} = req.body;

if(!email || !password){
    return res.status(400)
        .json({
            success: false,
            message: 'Falta email o password'
        })
} else{
    //2.Llega email pero, no existe
    const user = await UserModel.findOne({email}).select("password")
     if (!user) {
        return res.status(400)
        .json({
            success: false,
            message: 'El usuario no existe'
        })
        
    } else {
        //3.Si la contraseña es incorrecta con un usuario existente
        const isMatch = await user.compararPassword(password)
        if(isMatch){
            return res.status(200)
                .json({
                    success: true, 
                    msg: 'Usuario logeado',
                    data: user
                })
        }else{
            return res.status(400)
                .json({
                    success: false, 
                    message: 'Credenciales incorrectas'
                })
        }
    }
    /* console.log(user) */
}




})

module.exports = router 