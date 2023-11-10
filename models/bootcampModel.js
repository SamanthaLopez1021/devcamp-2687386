const mongoose=require('mongoose')

//definir un Schema Bootcamp
const BootcampSchema = new mongoose.Schema({
    name:{
        type: String,
        unique: [true, "Nombre ya existe"],
        required:[
            true,
            "nombre requerido"
        ]
    },
    phone:{
        type: Number,
        required:[
            true,
            "telefono requerido"
        ],
        max:[
            9999999999, "telefono no debe ser mayor a 10 digitos"
        ],
        min:[
            1111111, "telefono debe tener al menos 7 digitos"
        ]
    },
    address:{
        type: String,
        required:[
            true,
            "direccion requerida"
        ]
    },
    topics:{
        type:[ String],
        enum:[
            "Backend",
            "Frontend",
            "Devops",
            "AI"
        ] 
    },
    createAT:Date
})

module.exports =mongoose.model("Bootcamp", BootcampSchema)
