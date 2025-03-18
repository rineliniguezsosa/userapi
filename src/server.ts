import express from 'express';
import 'dotenv/config';
import { mongoconnection } from './config';
import { usuarioRouter } from './routes';
import cors from 'cors';

const app = express()

app.use(cors())
app.use(express.json());
app.use('/user',usuarioRouter);

mongoconnection();

app.listen(process.env.PORT,()=>{
    console.log(`Servidor ejecutandose en http://localhost:${process.env.PORT}`);
})