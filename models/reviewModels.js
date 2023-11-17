const mongoose=require('mongoose')

const ReviewSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[
            true,
             "El titulo es requerido"
            ],
            maxlength:[
                20,
                "El titulo debe de tener almenos 20 caracteres"
            ],
    },
    text:{
        type: String,
        required:[
            true,
            "Texto requerido"
        ],
        maxlength:[
            50,
            "El texto debe tener menos de 50 caracteres "
        ],
    },

    rating:{
        type: Number,
        required: [
            true, "El rating es requerido"
        ],
        max:[10, "La calificación no puede ser mayor a 10"],
        min:[1, "La calificación no puede ser menor a 1"]
    }

})

module.exports = mongoose.model("Review", ReviewSchema)