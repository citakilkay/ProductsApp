import express, { Router } from 'express';
import { createCompany, deleteCompany, getCompanies, updateCompany } from '../controllers/companyController';

export const routerCompany : Router = express.Router();

routerCompany.route('/').get(getCompanies).post(createCompany);
routerCompany.route('/:id').put(updateCompany).delete(deleteCompany);