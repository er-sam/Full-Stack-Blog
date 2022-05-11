import pkg from "mongoose";
import mongoose  from "mongoose";
// const {Schema} = pkg

const schema = mongoose.Schema;

const blogSchema = new schema({
    title:{
        type: String,
        required : true
    },
    desc:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    user:{
        type: String,
        required:true
    },
});
export default mongoose.model("Blog",blogSchema);
//blog