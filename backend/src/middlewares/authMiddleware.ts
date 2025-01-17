import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { UserAttributes } from "../models/user";

interface CustomRequest extends Request {
  user?: UserAttributes;
}

export const isAdmin = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(403).json({ message: "Forbidden" });
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as UserAttributes;
    req.user = decoded;
    if (req.user.role === "admin") {
      next();
    } else {
      res.status(403).json({ message: "Forbidden" });
    }
  } catch (error) {
    res.status(403).json({ message: "Forbidden" });
  }
};
