import express from 'express';
import 'dotenv/config';

const app = express()

app.listen(process.env.PORT,()=>{
    console.log(`Servidor ejecutandose en http://localhost:${process.env.PORT}`);
})