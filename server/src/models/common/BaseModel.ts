import { Document, Schema, model } from "mongoose"

const schemaBase = new Schema({
    creatorUser: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
})

const BaseModel = model('Base', schemaBase)

export default BaseModel;
