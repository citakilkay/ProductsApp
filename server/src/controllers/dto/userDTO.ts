import { ObjectId } from "mongoose";

export default class UserDTO {
    id?: ObjectId;
    creatorUser?: Object;
    creatorUserId: ObjectId;
    username: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}