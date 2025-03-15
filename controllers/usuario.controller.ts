import {Request,Response} from 'express'
import axios from 'axios';
import { usuario } from '../models';
import { UsuarioRequest } from '../types/interfaces';

export const getListUsers = async(requ:Request,resp:Response) =>{
    try {
        const req = await axios.get<UsuarioRequest>(`${process.env.RANDOMUSER}`);
        console.log("usuarios: ",req);
        const res = await req.data;

        const data = res.results.map((user)=> ({
            gender: user.gender,
            name: user.name,
            location:{
                street:{
                    number:user.location.street.number,
                    name:user.location.street.name
                },
                city: user.location.city,
                state: user.location.state,
                country: user.location.country,
                postcode: user.location.postcode
            }
        }))
        console.log("respuesta",resp);
        const user = await usuario.insertMany(data,{ ordered: false })

        resp.json({
            message:'Datos insertados',
            status:true,
            data: user
        })

        
    } catch (error) {
        console.log('error al insertar: ',error);
        resp.json({
            message:'Datos no ingresados',
            status:false
        })
    }
}