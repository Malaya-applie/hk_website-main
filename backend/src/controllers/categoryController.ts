import { Request, Response } from "express";
import { Category } from "../models/index";

// Get all categories
export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch categories" });
  }
};

// Create a new category
export const createCategory = async (req: Request, res: Response) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ error: "Failed to create category" });
  }
};

// Update a category
export const updateCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const [updated] = await Category.update(req.body, { where: { id } });
    if (updated) {
      const updatedCategory = await Category.findOne({ where: { id } });
      res.status(200).json(updatedCategory);
    } else {
      res.status(404).json({ error: "Category not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update category" });
  }
};

// Delete a category
export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await Category.destroy({ where: { id } });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: "Category not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete category" });
  }
};

// Delete multiple categories
export const deleteMultipleCategories = async (req: Request, res: Response) => {
  const { ids } = req.body;
  try {
    await Category.destroy({ where: { id: { $in: ids } } });
    res.status(200).json({ message: "Categories deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete categories", error });
  }
};
