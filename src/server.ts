import express from 'express';
import 'dotenv/config';
import { mongoconnection } from './config';
import { usuarioRouter } from './routes';
import cors from 'cors';
const port = process.env.PORT || 4000;

const app = express()

app.use(cors({
    origin:'https://rineliniguezsosa.github.io/userapp',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use('/user',usuarioRouter);

mongoconnection();

app.listen(port,()=>{
    console.log(`Servidor ejecutandose en http://localhost:${port}`);
})