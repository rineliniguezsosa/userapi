import { Router } from 'express';
import { getListUsers,getUsers,deleteUser,saveUser, getUserById,updateUserById } from '../controllers';

export const usuarioRouter = Router();

usuarioRouter.get('/get/userlist',getListUsers)
usuarioRouter.get('/get/all',getUsers)
usuarioRouter.delete('/delete/:_id',deleteUser)
usuarioRouter.post('/save',saveUser)
usuarioRouter.get('/getById/:_id',getUserById)
usuarioRouter.put('/update/:_id',updateUserById)