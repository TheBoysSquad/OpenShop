const express = require('express');
const routes = express.Router();

// Routes

routes.get('/', (req, res, next)=>{
    res.json({msg: "hola mundo"})
});

routes.get('/api', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM productos', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
});

routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('INSERT INTO productos set ?',[req.body] , (err, rows)=>{
            if(err) return res.send(err)

            res.send('Producto Registrado')
        })
    })
});

routes.delete('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('DELETE FROM productos WHERE id = ?',[req.params.id] , (err, rows)=>{
            if(err) return res.send(err)

            res.send('Producto Eliminado')
        })
    })
});

routes.put('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('UPDATE productos set ? WHERE id = ?',[req.body, req.params.id] , (err, rows)=>{
            if(err) return res.send(err)

            res.send('Libro Actualizado')
        })
    })
});
module.exports = routes;