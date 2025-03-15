import { Router } from 'express';
import { getListUsers } from '../controllers';

export const usuarioRouter = Router();

usuarioRouter.get('/get/userlist',getListUsers)