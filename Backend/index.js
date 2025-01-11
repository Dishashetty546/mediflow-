import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import authRoute from "./Routes/auth.js";

const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("API is working"); // Fix: Send a response to indicate API is working
});

// Database connection
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB database is connected");
  } catch (err) {
    console.log("MongoDB database connection failed", err);
    process.exit(1); // Exit process if the DB connection fails
  }
};

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/v1/auth", authRoute);

app.listen(port, "0.0.0.0", () => {
  connectDB();
  console.log(`Server is running on port ${port}`);
});
