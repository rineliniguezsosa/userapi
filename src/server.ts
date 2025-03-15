import express from 'express';
import 'dotenv/config';
import { mongoconnection } from '../config';

const app = express()

app.use(express.json());

mongoconnection();

app.listen(process.env.PORT,()=>{
    console.log(`Servidor ejecutandose en http://localhost:${process.env.PORT}`);
})