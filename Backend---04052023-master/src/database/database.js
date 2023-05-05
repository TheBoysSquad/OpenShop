const express = require('express');
const mongoose = require('mongoose');
const db = 'mongodb+srv://af01camacho:awdr3sf1661@cluster0.d5ivlsp.mongodb.net/'
// Conexion
mongoose.connect(db)
    .then(()=> {console.log('<--------------Conectado a la base de datos------------->')
                console.log(`<-----------${db}--------------->`)
                console.log('<------------------------------------------------------->')
})
    .catch((err) => console.error(err));