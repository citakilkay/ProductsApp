import { ObjectId } from 'mongoose';
import Company from '../models/Company';
import CompanyDTO from '../controllers/dto/companyDTO';
import User from '../models/User';

class CompanyService {
    async getAll() {
        try {
            return await Company.find({}).populate('creatorUser').lean();
        } catch (err) {
            throw err;
        }
    }
    async getById(id: ObjectId) {
        return Company.findById(id);
    }

    async update(id: ObjectId, data: CompanyDTO) {
        try {
            //validation and sanitization
            const updatedCompany = await Company.findByIdAndUpdate(id, data, { new: true });
            return updatedCompany;
        } catch (err) {
            throw err;
        }
    }
    async delete(id: ObjectId) {
        try {
            const deletedCompany = await Company.findByIdAndUpdate(
                id,
                { isDeleted: true },
                { new: true }
            );
            if (!deletedCompany) {
                throw new Error("Entity not found");
            }
            return deletedCompany;
        } catch (err) {
            throw err;
        }
    }
    async create(company: CompanyDTO) {
        try {
            const creatorUser = await User.findById(company.creatorUserId);
            await Company.create({
                name: company.name,
                creatorUser: creatorUser,
                legalNumber: company.legalNumber,
                website: company.website,
                incorporationCountry: company.incorporationCountry
            });
        } catch (err) {
            throw err;
        }
    }
}

export default CompanyService;