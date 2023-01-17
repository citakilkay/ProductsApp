import { Schema, model } from "mongoose";
import BaseModel from "./common/BaseModel";

const companySchema: Schema = new Schema({
    name: {
        type: String,
        required: [true, 'Please add a Name'],
        unique: true
    },
    legalNumber: {
        type: Number,
        required: [true, 'Please add a Legal Number']
    },
    website: {
        type: String,
        required: [true, 'Please add a Website Url']
    },
    incorporationCountry: {
        type: String,
        required: [true, 'Please add an Incorporation Country']
    }
}, {
    timestamps: true,
})

companySchema.loadClass(BaseModel);
export default model('Company', companySchema)