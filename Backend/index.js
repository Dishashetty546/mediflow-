import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  console.log("API working");
});

//middelware
app.use(express.json());
app.use(cors);
app.use(cookieParser);

app.listen(port, () => {
  console.log(`server is running in ${port}`);
});
