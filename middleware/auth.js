const jwt = require('jsonwebtoken')
const userModel = require('../models/usersModel')

//middleware para proteger 
//rutas a usuarios no logeados 
 exports.protect = async (req, res, next) =>{

        let token 

        //1.Verificar si existe el header que denominamos authorization
        if (req.headers.authorization &&
             req.headers.authorization.
             startsWith('Bearer')) {
                token = req.headers.authorization.split(' ')[1]
            
        }
        if (!token){
            return res.status(401).json({
                succes: false, 
                msg: 'Token Invalido'
            })
        }else{
//JSJS
        

            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

           /*  console.log(decoded) */
            //Añadir al req el "user"
            req.user = await userModel.findById(decoded.id)
            //redirigir a la ruta de crear bootcamps
            next()
        }
 }


//middleware para proteger de usuarios 
//usuarios que no tengan token 
exports.authorize = async (req, res, next) =>{

}