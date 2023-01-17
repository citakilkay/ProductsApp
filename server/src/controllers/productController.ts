import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import ProductService from '../services/productServices';
import ProductDTO from './dto/productDTO';


const productService = new ProductService();

export const getProducts = asyncHandler(async (req: Request, res: Response) => {
    try {
        const products = await productService.getAll();
        res.status(200).json(products);
    } catch (err) {
        throw err;
    }
})

export const getProductById = asyncHandler(async (req: Request, res: Response) => {
    try {
        const productById = await productService.getById(req.body.id);
        const productDto = new ProductDTO();
        Object.assign(productDto, productById);
        res.status(200).json(productDto);
    } catch (err) {
        throw err;
    }
})

export const updateProduct = asyncHandler(async (req: Request, res: Response) => {
    try {
        const productDto = req.body as ProductDTO;
        const updatedProduct = await productService.update(req.body.id, req.body);
        res.status(200).json(updatedProduct);
    } catch (err) {
        throw err;
    }
})

export const deleteProduct = asyncHandler(async (req: Request, res: Response) => {
    try {
        const deletedProduct = await productService.delete(req.body.id);
        res.status(200).json({ id: deletedProduct.id });
    } catch (err) {
        throw err;
    }
})

export const createProduct = asyncHandler(async (req: Request, res: Response) => {
    try {
        const productWillBeCreated = req.body as ProductDTO;
        const createdProduct = productService.create(productWillBeCreated);
        res.status(200).json(createdProduct);
    } catch (err) {
        throw err;
    }
})