import { Usuario } from './../types/interfaces';
import { model,Schema } from 'mongoose';

const user :Schema<Usuario> = new Schema({
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

export const usuario = model<Usuario>('usuario',user);