import { ObjectId } from 'mongoose';
import Product from '../models/Product';
import ProductDTO from '../controllers/dto/productDTO';
import User from '../models/User';
import Company from '../models/Company';

class ProductService {
    async getAll() {
        try {
            return await Product.find({}).populate(['creatorUser', 'company']).lean();
        } catch (err) {
            throw err;
        }
    }
    async getById(id: ObjectId) {
        return Product.findById(id);
    }

    async update(id: ObjectId, data: ProductDTO) {
        try {
            //validation and sanitization
            const updatedProduct = await Product.findByIdAndUpdate(id, data, { new: true });
            return updatedProduct;
        } catch (err) {
            throw err;
        }
    }
    async delete(id: ObjectId) {
        try {
            const deletedProduct = await Product.findByIdAndUpdate(
                id,
                { isDeleted: true },
                { new: true }
            );
            if (!deletedProduct) {
                throw new Error("Entity not found");
            }
            return deletedProduct;
        } catch (err) {
            throw err;
        }
    }
    async create(product: ProductDTO) {
        try {
            const creatorUser = await User.findById(product.creatorUserId);
            const companyOfProduct = await Company.findById(product.companyId);
            await Product.create({
                name: product.name,
                creatorUser: creatorUser,
                category: product.category,
                amount: product.amount,
                amountUnit: product.amountUnit,
                company: companyOfProduct
            });
        } catch (err) {
            throw err;
        }
    }
}

export default ProductService;