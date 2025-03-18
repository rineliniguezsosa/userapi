import { Usuario } from '../types';
import { model,Schema } from 'mongoose';

const userschema :Schema<Usuario> = new Schema({
    gender:{
        type:String
    },
    name:{
        type:String
    },
    location:{
        street:{
            number:{
                type:Number
            },
            name:{
                type:String
            }
        },
        city:{
            type:String
        },
        state:{
            type:String
        },
        country:{
            type:String
        }, 
        postcode:{
            type:String || Number
        }

    },
    email:{
        type:String
    },
    nat:{
        type:String
    }
})

export const usuario = model<Usuario>('usuario',userschema);