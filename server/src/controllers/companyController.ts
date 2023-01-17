import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import CompanyService from '../services/companyServices';
import CompanyDTO from './dto/companyDTO';

const companyService = new CompanyService();

export const getCompanies = asyncHandler(async (req: Request, res: Response) => {
    try {
        const companies = await companyService.getAll();
        res.status(200).json(companies);
    } catch (err) {
        throw err;
    }
})

export const getCompanyById = asyncHandler(async (req: Request, res: Response) => {
    try {
        const companyById = await companyService.getById(req.body.id);
        const companyDto = new CompanyDTO();
        Object.assign(companyDto, companyById);
        res.status(200).json(companyDto);
    } catch (err) {
        throw err;
    }
})

export const updateCompany = asyncHandler(async (req: Request, res: Response) => {
    try {
        const companyDto = req.body as CompanyDTO;
        const updatedCompany = await companyService.update(req.body.id, req.body);
        res.status(200).json(updatedCompany);
    } catch (err) {
        throw err;
    }
})

export const deleteCompany = asyncHandler(async (req: Request, res: Response) => {
    try {
        const deletedCompany = await companyService.delete(req.body.id);
        res.status(200).json({ id: deletedCompany.id });
    } catch (err) {
        throw err;
    }
})

export const createCompany = asyncHandler(async (req: Request, res: Response) => {
    try {
        const companyWillBeCreated = req.body as CompanyDTO;
        const createdCompany = companyService.create(companyWillBeCreated);
        res.status(200).json(createdCompany);
    } catch (err) {
        throw err;
    }
})