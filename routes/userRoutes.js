const express = require('express')
const UserModel = require  ('../models/usersModel')
const router = express.Router()
const mongoose = require  ('mongoose')

// registro de usuarios
router.post('/register', async (req,res)=> {

    try{
        const user = await UserModel.create(req.body)
        //crear el token
        const token = user.generarJWT()
        res.status(201).json({
            success: true,
            data: user,
            token_jwt: token
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
        //crear con opciones las cookies 
        
        if(isMatch){
            const token = user.generarJWT()
            const options = {
                expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
                httpOnly:true,
            }
            return res.status(200)
                    .cookie('token', token, options)
                    .json({
                        success: true, 
                        msg: 'Usuario logeado',
                        data: user,
                        jwt_token:token
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