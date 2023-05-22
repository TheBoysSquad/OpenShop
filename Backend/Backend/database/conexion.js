import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config()

async function database()
{
    try {
        const db = await mongoose.connect(process.env.DB)
        console.log('Conexion Exitosa a la base de datos')}
    catch (error)
        {console.error(error)}
}

export default database