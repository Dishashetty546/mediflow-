import express from "express";
import { register, login } from "../Controllers/autoControllers.js";

const router = express.Router();
router.post("/register", async (req, res) => {
  try {
    // Perform signup logic (e.g., check user existence, create user)
    res.json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" }); // return error as JSON
  }
});

router.post("/login", login);

export default router;
