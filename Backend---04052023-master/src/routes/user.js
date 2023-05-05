//  Modulos importantes
const express = require('express');
const router =  express.Router();
const userSchema = require('../models/user')

// Crear usuario(POST)
router.post('/users', (req, res) =>{
    const user = userSchema(req.body);
    user.save()
    .then( (data) => res.json(data) )
    .catch( (err) => res.json({ msg: err}))
});
// Obtener todos los usuarios
router.get('/users', (req, res) =>{
    userSchema
    .find()
    .then( (data) => res.json(data) )
    .catch( (err) => res.json({ msg: err}))
});

// Obtener por ID
router.get('/users/:id', (req, res) =>{
    const { id } = req.params;
    userSchema
        .findById(id)
        .then( (data) => res.json(data) )
        .catch( (err) => res.json({ msg: err}))
});
// Actualizar por ID el usuario
router.put('/users/:id', (req, res) =>{
    const { id } = req.params;
    const { nombre, descripcion, precio, stock, tipo } = req.body;
    userSchema
        .updateOne({ _id: id }, { $set:{ nombre, descripcion, precio, stock, tipo } })
        .then((data) => res.json(data))
        .catch((err) => res.json({ msg: err}))
});








module.exports = router;