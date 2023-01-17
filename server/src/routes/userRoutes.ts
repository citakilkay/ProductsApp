import express, { Router } from 'express';
import { createUser, deleteUser, getUsers, updateUser } from '../controllers/userController';

export const routerUser: Router = express.Router();

routerUser.route('/').get(getUsers).post(createUser);
routerUser.route('/:id').put(updateUser).delete(deleteUser);