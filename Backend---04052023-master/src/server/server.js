function server (){
    // Modulos Importantes
    const express = require('express');
    const userRoutes = require('../routes/user');
    const cors = require('cors')

    // Servidor 
   
    const app = express();
    const port = 9000;
    

    //Middlewars
    app.use(cors())

    app.use(express.json())
    app.use('/api', userRoutes);
    

    // Rutas
    app.get('/', (req, res)=>{
        res.send('index')
    });

    // Prender el servidor
    app.listen(port, () =>{
        console.log('<------------------------------------------------------->')
        console.log('<-------------------SERVIDOR CORRIENDO------------------>')
        console.log(`<---------------------127.0.0.1: ${port}------------------->`)
    })
}

module.exports = server;