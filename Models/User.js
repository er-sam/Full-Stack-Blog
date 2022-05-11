import pkg from "mongoose";
import mongoose  from "mongoose";
const {Schema} = pkg

const schema = mongoose.Schema;

const userSchema = new schema({
    name:{
        type: String,
        required : true
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true,
        minlength: 6
    }
});

export default mongoose.model("User",userSchema);
//users