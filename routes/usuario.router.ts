import { Router } from 'express';
import { getListUsers,getUsers } from '../controllers';

export const usuarioRouter = Router();

usuarioRouter.get('/get/userlist',getListUsers)
usuarioRouter.get('/get/all',getUsers)