import {Request, Response} from "express";
import ServicesTable from "../models/ServicesTable"


// create a new service detail
export const createServiceDetail = async (req: Request, res: Response) => {
    try {
        const { serviceType, serviceDescription } = req.body;
        const service = await ServicesTable.create({ serviceType, serviceDescription });
        res.status(201).json(service);
    } catch (error) {
        res.status(500).json({ error: "Failed to create service detail" });
    }
};

// update a service detail type
export const updateServiceDetail = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { serviceType, serviceDescription } = req.body;
        const [updated] = await ServicesTable.update({ serviceType, serviceDescription }, { where: { id } });
        if (updated) {
            const updatedService = await ServicesTable.findOne({ where: { id } });
            res.status(200).json(updatedService);
        } else {
            res.status(404).json({ error: "Service detail not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to update service detail" });
    }
};

// get a service detail by id
export const getServiceDetailById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const serviceDetail = await ServicesTable.findOne({ where: { id } });
        if (serviceDetail) {
            res.status(200).json(serviceDetail);
        } else {
            res.status(404).json({ error: "Service detail not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to get service detail" });
    }
};


// get all service details
export const getServiceDetails = async (req: Request, res: Response) => {
    try {
        const serviceDetails = await ServicesTable.findAll();
        res.status(200).json(serviceDetails);
    } catch (error) {
        res.status(500).json({ error: "Failed to get service details" });
    }
};


// delete a service detail
export const deleteServiceDetail = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deleted = await ServicesTable.destroy({ where: { id } });
        if (deleted) {
            res.status(200).json({ message: "Service detail deleted successfully" });
        } else {
            res.status(404).json({ error: "Service detail not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to delete service detail" });
    }
};




