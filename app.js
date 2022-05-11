import express from "express";
import mongoose from "mongoose";
import blogrouter from "./Routes/blog-rotes";
// import router from "../Blog/Routes/user-route"
import router from "./Routes/user-route"

const app = express();
app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog",blogrouter);


// app.use("/api", (req, res, next) => {
//     res.send("hello")
// })
let db = "mongodb://127.0.0.1:27017/blog"
// let db = "mongodb+srv://sam:RsoIHubVeEGlyEvx@cluster0.ohi9f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(db).then(() => app.listen(5000)).then(() => console.log("connected")).catch((err) => { console.log(err) })



//listen
// app.listen(5000,()=>{
//     console.log("port listening.....")
// })



//RsoIHubVeEGlyEvx