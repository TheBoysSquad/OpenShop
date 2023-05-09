const mongoose =require('mongoose');

const userSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    precio: {
        type: String,
        required: true
    },
    stock: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    imagen: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', userSchema)