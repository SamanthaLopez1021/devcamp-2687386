const mongoose=require('mongoose')

//definir un Schema Bootcamp
const CourseSchema = new mongoose.Schema({
    title:{
        type: String,
        required:[
            true,
            "nombre requerido"
        ],
        maxlength:[30, "El nombre no debe ser mayor a 10 caracteres"
        ],
        minlength:[10, "El nombre debe ser minimo de 10 caracteres"
        ]
    },
    description:{
        type: String,
        required:[
            true,
            "descripcion requerida"
        ],
        minlength:[
            10, "La descripcion debe tener minimo 10 caracteres"
        ]
    },
    weeks:{
        type: Number,
        required:[
            true,
            "Numero de semanas requeridas"
        ],
        max:[
            9,"Las semanas deben ser maximo de 9"
        ]
    },
    enroll_cost:{
        type: Number,
        required:[
            true,
            "Costo de inscripcion requerido"
        ]
         
    },
    minimun_skill:{
        type: String,
        required:[
            true,
            "Habilidad minima requerida"
        ]

    }
})

module.exports =mongoose.model("Course", CourseSchema)