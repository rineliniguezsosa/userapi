import {Request,Response} from 'express'
import axios from 'axios';

export const getListUsers = async(req:Request,resp:Response) =>{
    try {
        const usuarios = await axios.get(`${process.env.RANDOMUSER}`);
        console.log("usuarios: ",usuarios);
        
    } catch (error) {
        
    }
}