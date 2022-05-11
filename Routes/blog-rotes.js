import express from "express";
import { addBlog, getAllBlog, updateblog } from "../controller/blog-controller";
// import { getAllUser, login, signup } from "../controller/user-controller";
let blogrouter = express.Router();

blogrouter.get("/",getAllBlog);
blogrouter.post("/add",addBlog);
blogrouter.put("/update/:id",updateblog)


export default blogrouter;