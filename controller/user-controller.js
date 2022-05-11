import User from "../Models/User"


export const getAllUser = async(req,res,next)=>{
    let users;
    try{
        users = await User.find();

    }
    catch(err){
       return console.log(err);
    }
    if(!users){
        return res.status(404).json({message:"No users found"});
    }
    return res.status(200).json({users})
}


export const signup = async (req,res,next)=>{
    const {name,email,password} = req.body;
    let existinguser;
    try{
        existinguser = await User.findOne({email});
    }
    catch(err){
       return console.log(err);
    }

    if(existinguser){
        return res.status(400).json({message:"User already existing"});
    }
    const user = new User({
        name,
        email,
        password
    });

    try{
        await user.save();

    }
    catch(err){
        return console.log(err)
    }
    return res.status(201).json({user})
}


export const login = async (req,res,next)=>{
    const {email,password} = req.body;
    let existinguser;
    try{
        existinguser = await User.findOne({email});
       
    }
    catch(err){
       return console.log(err);
    }

    if(!existinguser){
        return res.status(404).json({message:"User does not exist"});
        // return res.status(400).json({message:"User already existing"});
    }
    else{
        if(existinguser.password === password){
            return res.status(200).json({message:"Welcome screen"});
        }

    }
}