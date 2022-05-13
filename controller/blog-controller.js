import Blog from "../Models/Blog";


export const getAllBlog = async(req,res,next)=>{
    let blogs;
    try{
        blogs = Blog.find();
    }
    catch(err){
        console.log(err);
    }

    if(!blogs){
        return res.status(404).json({message:"No blog found"});
    }
    return res.status(200).json(blogs);
}


export const addBlog = async (req,res,next)=>{
    const {title,desc,image,user} = req.body;
    // console.log(desc);
    const Newblog = new Blog({title,desc,image,user});
    try{
        await Newblog.save();
        // console.log("saved");
        // console.log(Blog);
    }
    catch(err){
        console.log(err);
    }
    return res.status(200).json({Newblog});
    
}



export const updateblog = async (req,res,next)=>{
    const {title,desc} = req.body;
    const blogid = req.params.id;

    let blog;
    try{
        
      blog = await Blog.findByIdAndUpdate(blogid,{
        title,
        desc
        })
    }
    catch(err){
        return console.log(err);
    }

    if(!blog){
        return res.status(500).json({message:"Unable to update"});
    }
    return res.status(200).json({blog});

}

export const getbyId = async (req,res,next)=>{
    const bid = req.params.id;
    let blog;
    try{
        blog = await Blog.findById(bid);
    }catch(err){
        return console.log(err);
    }

    if(!blog){
        return res.status(404).json({message:"Not found"});
    }
    return res.status(200).json({blog});
}

export const deletebyid = async (req,res,next)=>{
    const bid = req.params.id;
    let blog;
    try{
        blog = await Blog.findOneAndDelete(bid);
    }
    catch(err){
        console.log(err);
    }

    if(!blog){
        return res.status(404).json({message:"Error generated"});
    }
    return res.status(200).json({message:"deleted....."})
}



export const getbyuserid = async (req,res,next ) =>{
    const blid = req.params.id;
    let usblog;
    try{
        usblog = Blog.findById(blid).populate("blog")
    }
    catch(err){
        return console.log(err);
    }

    if(!usblog){
        return res.status(404).json({message:"Not found"});
    }
    return res.status(200).json({usblog});
}