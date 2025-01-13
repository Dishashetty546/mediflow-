import {
  updateUser,
  getAllUser,
  getSingleUser,
  deleteUser,
} from "../Controllers/userController";
import express from "express";
const router = express.Router();
router.get("/:id", getSingleUser);
router.get("/", getAllUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
