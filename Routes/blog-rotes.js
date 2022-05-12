import express from "express";
import { addBlog, deletebyid, getAllBlog, getbyId, updateblog } from "../controller/blog-controller";
// import { getAllUser, login, signup } from "../controller/user-controller";
let blogrouter = express.Router();

blogrouter.get("/",getAllBlog);
blogrouter.post("/add",addBlog);
blogrouter.put("/update/:id",updateblog)
blogrouter.get("/:id",getbyId);
blogrouter.delete("/:id",deletebyid)


export default blogrouter;