import express from "express";
import {
  createPostController,
  getPostController,
  getAllPostcontroller,
  updatePostcontroller,
  deletePostcontroller,
} from "../controller/Post.js";

const routes = express.Router();
routes.post("/create-post", createPostController);
routes.get("/get-post/:slug", getPostController);
routes.get("/get-all-post", getAllPostcontroller);
routes.put("/update-post/:id", updatePostcontroller);
routes.delete("/delete-post/:id", deletePostcontroller);
export default routes;
