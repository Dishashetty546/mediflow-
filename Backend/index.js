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
//database connection

mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Mogodb database is connected");
  } catch (err) {
    console.log("mongodb database connected is failed");
  }
};

//middelware
app.use(express.json());
app.use(cors);
app.use(cookieParser);

app.listen(port, () => {
  connectDB();
  console.log(`server is running in ${port}`);
});
