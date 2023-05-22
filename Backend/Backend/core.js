/*                 Modulos globales               */
import express from 'express';
const server = express();
import database from './database/conexion.js'
import dotenv from "dotenv";
import morgan from "morgan";
import fileUpload from 'express-fileupload'
/*                      Importaciones Globales                     */

import {routes_products} from './routes/products.js'
import { routes_users } from './routes/users.js';


/*                  Middwalers Globales                         */
server.use(morgan( 'dev' ))
server.use(express.json())
server.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}))



/*                   Rutas del servidor                */

server.use( routes_products )
server.use( routes_users )

/*                Configuraciones Globales          */
dotenv.config()
server.set('port', 9000  || process.env.PORT);

/*               Variables Globales                  */
const conexion_db = database();


/*                   MENSAJES GLOBALES               */
const msg_port = server.get('port')

server.listen(msg_port, () => {
    console.log(`Servidor corriendo en el puerto: ${msg_port}`);
})








