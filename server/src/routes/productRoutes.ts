import express, { Router } from 'express';
import { createProduct, deleteProduct, getProducts, updateProduct } from '../controllers/productController';

export const routerProduct: Router = express.Router();

routerProduct.route('/').get(getProducts).post(createProduct);
routerProduct.route('/:id').put(updateProduct).delete(deleteProduct);