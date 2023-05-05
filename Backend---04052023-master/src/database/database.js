const express = require('express');
const mongoose = require('mongoose');
const db = 'mongodb://127.0.0.1:27017/api'
// Conexion
mongoose.connect(db)
    .then(()=> {console.log('<--------------Conectado a la base de datos------------->')
                console.log(`<-----------${db}--------------->`)
                console.log('<------------------------------------------------------->')
})
    .catch((err) => console.error(err));