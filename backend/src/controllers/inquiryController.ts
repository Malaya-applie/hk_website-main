import { Request, Response } from "express";
import { Inquiries } from "../models/inquiry";

export const createInquiry = async (req: Request, res: Response) => {
  try {
    const { name, email, service } = req.body;
    const inquiry = await Inquiries.create({ name, email, service });
    res.status(201).json(inquiry);
  } catch (error) {
    res.status(500).json({ error: "Failed to create inquiry" });
  }
};

export const getInquiries = async (req: Request, res: Response) => {
  try {
    const inquiry = await Inquiries.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.json(inquiry);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch inquiries" });
  }
};
