const jwt = require('jsonwebtoken')
const userModel = require('../models/usersModel')

//middleware para proteger 
//rutas a usuarios no logeados 
 exports.protect = async (req, res, next) =>{
        try {
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
                    msg: 'Usuario no autorizado'
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
        } catch (error) {
            res.status(500).json({
                success:false,
                msg: error.message
            })
            
        }

        
 }


//middleware para proteger de usuarios 
//usuarios que no tengan token 
exports.authorize = (rol)=>{
    return async (req, res, next) => {
        //comparar si el rol del parametro es igual al rol de usuario
        if (req.user.role !=rol) {
            res.status(401).json({
                success:false,
                msg:"ROL NO AUTORIZADO"
            })
            
        } else {
            next()
        }
    }

}