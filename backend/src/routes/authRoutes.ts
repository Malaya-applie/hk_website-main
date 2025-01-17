import { Router, Request, Response } from "express";
import { login } from "../controllers/authController"; // Import the login controller
import { isAdmin } from "../middlewares/authMiddleware"; // Import the isAdmin middleware
import { UserAttributes } from "../models/user";

interface CustomRequest extends Request {
  user?: UserAttributes;
}

const router = Router();

router.post("/login", login); // Add the login route

router.get("/profile", isAdmin, (req: CustomRequest, res: Response) => {
  res.json({ user: req.user });
});

export default router;
