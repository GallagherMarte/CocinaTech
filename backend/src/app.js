import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import './models/datos.js';
import RutaUsuario from './routers/usuario.js';


dotenv.config();

//inicialixa express
const app = express();

app.use(cors({
    origin: '*'
}));
app.use(express.json({}));

app.use(morgan('dev'));

app.use('/api',RutaUsuario )


const PORT = process.env.PORT || 5000;


app.listen(PORT,()=>{
    console.log(`server corriendo en http://localhost:${PORT}`);
})


