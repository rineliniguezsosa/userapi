import {Request,Response} from 'express'
import axios from 'axios';
import { usuario } from '../models';
import { UsuarioRequest } from '../types/interfaces';

export const getListUsers = async(requ:Request,resp:Response) =>{
    try {
        const req = await axios.get<UsuarioRequest>(`${process.env.RANDOMUSER}`);
        const res = await req.data;
       
        const data = res.results.map((user)=> ({
            gender: user.gender,
            name: user.name.first,
            location:{
                street:{
                    number:user.location.street.number,
                    name:user.location.street.name
                },
                city: user.location.city,
                state: user.location.state,
                country: user.location.country,
                postcode: user.location.postcode
            },
            email:user.email,
            nat:user.nat
        }))
        
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

export const getUsers = async(requ:Request,resp:Response) =>{
    try {
        const listusers =  await usuario.find();

        resp.json({
            status:true,
            data: listusers
        })
    } catch (error) {
        console.log('error al obtener: ',error);
        resp.json({
            status:false,
            message:'Algo sucedio intenta de nuevo'
        })
    }
}

export const deleteUser = async(requ:Request,resp:Response) => {
    try {
        const { _id } = requ.params
    
        const deleteuser = await usuario.deleteOne({_id:_id});

        resp.json({
            status:true,
            message:'registro eliminado',
            data:deleteuser
        })

    } catch (error) {
        console.log('error al obtener: ',error);
        
        resp.json({
            status:false,
            message:'Algo salio mal en la eliminación',
        })
    }
}

export const saveUser = async(requ:Request,resp:Response) =>{
    const newuser = new usuario({...requ.body})
    console.log("save user:",requ.body);
    try {
        const user = await newuser.save(requ.body);
         console.log("user",user);
        resp.json({
            status:true,
            message:'Registro insertado correctamente :)',
            data:user
        })
         
    } catch (error) {
        console.log(error);
        
        resp.json({
            status:false,
            message:'Algo salio mal en la inserción',
        })
    }
}

export const getUserById = async(requ:Request,resp:Response) =>{
    const { _id } = requ.params;
    try {
        const req = await usuario.find({_id:_id});

        resp.json({
            status:true,
            data:req
        })
    } catch (error) {
        console.log(error);
        
        resp.json({
            status:false,
            message:'Algo salio mal en la obtención del usuario',
        })
    }
}