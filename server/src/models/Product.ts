import { Schema, model } from "mongoose"
import BaseModel from "./common/BaseModel";

//IsDeleted, CreatorUser, CreatedDate

const productSchema = new Schema({
    creatorUser: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    name: {
        type: String,
        required: [true, 'Please add a Name'],
        unique: true
    },
    category: {
        type: String
    },
    amount: {
        type: Number,
        default: 0
    },
    amountUnit: {
        type: Number,
        default: 0
    },
    company: {
        type: Schema.Types.ObjectId,
        required: [true, 'Please add a Company'],
        ref: 'Company',
    },
}, {
    timestamps: true,
})
productSchema.loadClass(BaseModel);
export default model('Product', productSchema)