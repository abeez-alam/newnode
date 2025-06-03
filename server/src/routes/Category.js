import express from "express";
import { createCategoryController } from "../controller/Category.js";
const app = express.Router();

app.post("/create-Category",createCategoryController);


export default app;