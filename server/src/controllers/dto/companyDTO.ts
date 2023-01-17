import { ObjectId } from "mongoose";

export default class CompanyDTO {
    id?: ObjectId;
    creatorUser?: Object;
    creatorUserId: ObjectId;
    name: String;
    legalNumber: Number;
    website: string;
    incorporationCountry: string;
    createdAt: Date;
    updatedAt: Date;
}