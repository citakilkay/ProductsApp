import { Schema, model } from "mongoose"
import BaseModel from "./common/BaseModel";
const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Please add a Name'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Email address is required.'],
        match: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, 'Please fill a valid email address'],
        unique: true
    },
    password: {
        type: String,
        min: [8, 'Please add 8 character'],
    }
},
    {
        timestamps: true,
    })

userSchema.loadClass(BaseModel);

export default model('User', userSchema)