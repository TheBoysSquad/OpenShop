//  Modulos importantes
const express = require('express');
const router =  express.Router();
const productosSchema = require('../models/productos')

// Crear usuario(POST)
router.post('/productos', (req, res) =>{
    const productos = productosSchema(req.body);
    productos.save()
    .then( (data) => res.json(data) )
    .catch( (err) => res.json({ msg: err}))
});
// Obtener todos los usuarios
router.get('/productos', (req, res) =>{
    productosSchema
    .find()
    .then( (data) => res.json(data) )
    .catch( (err) => res.json({ msg: err}))
});

// Obtener por ID
router.get('/productos/:id', (req, res) =>{
    const { id } = req.params;
    productosSchema
        .findById(id)
        .then( (data) => res.json(data) )
        .catch( (err) => res.json({ msg: err}))
});
// Actualizar por ID el usuario
router.put('/productos/:id', (req, res) =>{
    const { id } = req.params;
    const { nombre, descripcion, precio, stock, tipo } = req.body;
    productosSchema
        .updateOne({ _id: id }, { $set:{ nombre, descripcion, precio, stock, tipo } })
        .then((data) => res.json(data))
        .catch((err) => res.json({ msg: err}))
});








module.exports = router;