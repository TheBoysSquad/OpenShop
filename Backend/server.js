//Modulos importados 

const express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');
const routes = require('./routes');
const cors = require('cors')

//App
const app = express();
app.set('port', process.env.PORT || 9000);
const dbOptions = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'tienda'
}

//Middlewares
app.use(myconn(mysql, dbOptions, 'single'));
app.use(express.json());
app.use(cors());

// Routes
app.use('/', routes)
app.use('/api', routes)


//Start Server
app.listen(app.get('port'), () =>{
    console.log('El servidor esta funcionando en el puerto: ',app.get('port'))
});