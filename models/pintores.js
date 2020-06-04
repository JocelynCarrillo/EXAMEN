const mongoose = require('mongoose');

//Crear un esquema (base de datos)

let Schema = mongoose.Schema;


//Crear una colección
let PintoresSchema = new Schema({
    nombre:{
        type: String,
        required: [true, 'Requerimos el nombre']
    },
    corriente:{
        type: String,
        required: [true, 'Requerimos la corriente']
    },
    nacionalidad:{
        type: String
    },
    pintura:{
        type: String
    }

});

module.exports = mongoose.model('pintores', PintoresSchema);