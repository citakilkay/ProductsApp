import { ObjectId } from 'mongoose';
import User from '../models/User';
import UserDTO from '../controllers/dto/userDTO';

class UserService {
    async getAll() {
        try {
            return await User.find({}).populate('creatorUser').lean();
        } catch (err) {
            throw err;
        }
    }
    async getById(id: ObjectId) {
        return User.findById(id);
    }
    async update(id: ObjectId, data: UserDTO) {
        try {
            //validation and sanitization
            const updatedUser = await User.findByIdAndUpdate(id, data, { new: true });
            return updatedUser;
        } catch (err) {
            throw err;
        }
    }
    async delete(id: ObjectId) {
        try {
            const deletedUser = await User.findByIdAndUpdate(
                id,
                { isDeleted: true },
                { new: true }
            );
            if (!deletedUser) {
                throw new Error("Entity not found");
            }
            return deletedUser;
        } catch (err) {
            throw err;
        }
    }
    async create(user: UserDTO) {
        try {
            const creatorUser = await User.findById(user.creatorUserId);
            await User.create({
                username: user.username,
                creatorUser: creatorUser,
                email: user.email,
                password: user.password
            });
        } catch (err) {
            throw err;
        }
    }
}

export default UserService;