import { Request, Response } from "express";
import { NewsletterSignup } from "../models/newsLetterSignup";

export const createNewsletterSignup = async (req: Request, res: Response) => {
  try {
    const { name, email, agreed } = req.body;
    const signup = await NewsletterSignup.create({ name, email, agreed });
    res.status(201).json(signup);
  } catch (error) {
    res.status(500).json({ error: "Failed to create newsletter signup" });
  }
};

export const getNewsletterSignups = async (req: Request, res: Response) => {
  try {
    const signups = await NewsletterSignup.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.json(signups);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch newsletter signups" });
  }
};
