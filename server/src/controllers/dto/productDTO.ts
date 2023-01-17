import { ObjectId } from "mongoose";

export default class ProductDTO {
    id?: ObjectId;
    creatorUser?: Object;
    creatorUserId: ObjectId;
    name: string;
    category: Number;
    amount: string;
    amountUnit: string;
    company?: Object;
    companyId: ObjectId;
    createdAt: Date;
    updatedAt: Date;
}