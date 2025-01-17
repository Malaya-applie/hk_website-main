import { Request, Response } from "express";
import { Navbar } from "../models/navbar";

// Get all navbar items
export const getNavbars = async (req: Request, res: Response) => {
  try {
    const navbars = await Navbar.findAll();
    res.json(navbars);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch navbar data" });
  }
};

// Create a new navbar item
export const createNavbar = async (req: Request, res: Response) => {
  try {
    const navbar = await Navbar.create(req.body);
    res.status(201).json(navbar);
  } catch (error) {
    res.status(500).json({ error: "Failed to create navbar item" });
  }
};

// Update a navbar item
export const updateNavbar = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const [updated] = await Navbar.update(req.body, { where: { id } });
    if (updated) {
      const updatedNavbar = await Navbar.findOne({ where: { id } });
      res.status(200).json(updatedNavbar);
    } else {
      res.status(404).json({ error: "Navbar item not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update navbar item" });
  }
};

// Delete a navbar item
export const deleteNavbar = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await Navbar.destroy({ where: { id } });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: "Navbar item not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete navbar item" });
  }
};

export const deleteMultipleNavbars = async (req: Request, res: Response) => {
  const { ids } = req.body;
  try {
    await Navbar.destroy({ where: { id: { $in: ids } } });
    res.status(200).json({ message: "Navbars deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete navbars", error });
  }
};
