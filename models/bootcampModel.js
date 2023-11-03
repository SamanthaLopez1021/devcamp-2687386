const mongoose=require('mongoose')

//definir un Schema Bootcamp
const BootcampSchema = new mongoose.Schema({
    name:{
        type: String,
        unique: true,
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
        maxlenght:[
            10, "telefono no debe ser mayor a 10 digitos"
        ],
        minlenght:[
            7, "telefono debe tener al menos 7 digitos"
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
