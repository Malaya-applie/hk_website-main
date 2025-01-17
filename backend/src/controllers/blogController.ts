import { Request, Response } from "express";
import { Blog, Category } from "../models/index";
import { deleteImage } from "../utils/imageDelete";
import { error } from "console";

// Get all blogs
export const getBlogs = async (req: Request, res: Response) => {
  try {
    const blogs = await Blog.findAll({
      include: [
        {
          model: Category,
          attributes: ["name"], // Only include the 'name' attribute from the Category model
        },
      ],
    });

    const formattedBlogs = blogs.map((blog) => ({
      id: blog?.id,
      title: blog?.title,
      introduction: blog?.introduction,
      description: blog?.description,
      category: blog?.Category.name,
      author: blog?.author,
      image: blog?.image,
      createdAt: blog?.createdAt,
      updatedAt: blog?.updatedAt,
    }));
    res.json(formattedBlogs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
};

export const getBlogById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const blogs = await Blog.findOne({
      where: { id },
    });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
};

// Create a new blog
export const createBlog = async (req: Request, res: Response) => {
  try {
    const { title, categoryId, introduction, description, author } = req.body;
    const imagePath = req.file?.filename as string;

    const blog = await Blog.create({
      title,
      categoryId: parseInt(categoryId),
      introduction,
      description,
      author,
      image: imagePath, // Save the relative image path in the database
    });
    res.status(201).json(blog);
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: "Failed to create blog" });
  }
};

// Update a blog
export const updateBlog = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, categoryId, introduction, description, author } = req.body;
    const imagePath = req.file?.filename; // Get the filename of the uploaded image if it exists

    const updatedData: any = {
      title,
      categoryId: parseInt(categoryId),
      introduction,
      description,
      author,
    };
    if (imagePath) {
      updatedData.image = imagePath; // Update image path if a new one is uploaded
      const existingBlog = await Blog.findOne({ where: { id } });
      if (!existingBlog) {
        return res.status(404).json({ error: "Blog not found" });
      }
      deleteImage(existingBlog.image);
    }

    const [updated] = await Blog.update(updatedData, { where: { id } });
    if (updated) {
      const updatedBlog = await Blog.findOne({ where: { id } });
      res.status(200).json(updatedBlog);
    } else {
      res.status(404).json({ error: "Blog not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update blog" });
  }
};

// Delete a blog
export const deleteBlog = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const existing = await Blog.findOne({ where: { id } });
    if (!existing) {
      return res.status(404).json({ error: "Blog not found" });
    }
    deleteImage(existing.image);

    const deleted = await Blog.destroy({ where: { id } });

    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: "Blog not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete blog" });
  }
};

export const getOneBlogByType = async (req: Request, res: Response) => {
  const { type } = req.params;
  let category;
  if (type === "all") {
    category = undefined;
  } else {
    category = type;
  }
  try {
    const blog = await Blog.findOne({
      where: category ? { categoryId: category } : {}, // Filter by category if defined
      order: [["createdAt", "DESC"]], // Sort by creation date in descending order
      include: [
        {
          model: Category,
          attributes: ["name"], // Only include the 'name' attribute from the Category model
        },
      ],
      attributes: ["id", "title", "introduction", "image", "createdAt"],
    });

    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch blog" });
  }
};

export const getBlogsByType = async (req: Request, res: Response) => {
  const { type, count } = req.params;

  let category;
  if (type === "all") {
    category = undefined;
  } else {
    category = type;
  }
  try {
    const blogs = await Blog.findAll({
      where: category ? { categoryId: category } : {}, // Filter by category if defined
      order: [["createdAt", "DESC"]], // Sort by creation date in descending order
      include: [
        {
          model: Category,
          attributes: ["name"], // Only include the 'name' attribute from the Category model
        },
      ],
      attributes: ["id", "title", "image"],
      ...(count !== "all" ? { limit: Number(count) } : {}),
      offset: 1,
    });

    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch blog" });
  }
};

export const getBlog = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const blogs = await Blog.findOne({
      where: { id },
      include: [
        {
          model: Category,
          attributes: ["id", "name"],
        },
      ],
    });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
};
