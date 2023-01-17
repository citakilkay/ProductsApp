import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import UserService from '../services/userServices';
import UserDTO from './dto/userDTO';

const userService = new UserService();

export const getUsers = asyncHandler(async (req: Request, res: Response) => {
    try {
        const users = await userService.getAll();
        res.status(200).json(users);
    } catch (err) {
        throw err;
    }
})

export const getUserById = asyncHandler(async (req: Request, res: Response) => {
    try {
        const userById = await userService.getById(req.body.id);
        const userDto = new UserDTO();
        Object.assign(userDto, userById);
        res.status(200).json(userDto);
    } catch (err) {
        throw err;
    }
})

export const updateUser = asyncHandler(async (req: Request, res: Response) => {
    try {
        const userDto = req.body as UserDTO;
        const updatedUser = await userService.update(req.body.id, req.body);
        res.status(200).json(updatedUser);
    } catch (err) {
        throw err;
    }
})

export const deleteUser = asyncHandler(async (req: Request, res: Response) => {
    try {
        const deletedUser = await userService.delete(req.body.id);
        res.status(200).json({ id: deletedUser.id });
    } catch (err) {
        throw err;
    }
})

export const createUser = asyncHandler(async (req: Request, res: Response) => {
    try {
        const userWillBeCreated = req.body as UserDTO;
        const createdUser = userService.create(userWillBeCreated);
        res.status(200).json(createdUser);
    } catch (err) {
        throw err;
    }
})