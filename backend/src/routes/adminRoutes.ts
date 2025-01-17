import { Router } from "express";

const router = Router();

router.get("/dashboard", (req, res) => {
  res.json({ message: "Welcome to the admin dashboard" });
});

// Add more admin routes here

export default router;
