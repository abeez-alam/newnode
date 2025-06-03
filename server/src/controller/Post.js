import cloudinary from "../config/Cloudinary.js";
import Post from "../models/Post.js";
import slugify from "slugify";

export const createPostController = async (req, res) => {
  try {
    const {
      title,
      hotelLocation,
      description,
      Category,
      isAvailable,
      guest,
      price,
      nearArea,
      facilities,
    } = req.body;

    const files = req.files?.images;

    // Validate required fields
    if (
      !title ||
      !hotelLocation ||
      !description ||
      !Category ||
      !isAvailable ||
      !guest ||
      !price ||
      !nearArea ||
      !facilities
    ) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Validate files
    if (!files || files.length !== 3) {
      return res.status(400).json({
        message: "You must provide exactly 3 images",
      });
    }

    // Upload images to Cloudinary
    const imageUrls = await Promise.all(
      files.map((file) =>
        cloudinary.uploader
          .upload(file.tempFilePath)
          .then((result) => ({
            url: result.secure_url,
            public_id: result.public_id
          }))
      )
    );

    // Create new post
    const newPost = new Post({
      title,
      hotelLocation,
      description,
      Category,
      isAvailable,
      guest,
      price,
      nearArea,
      facilities,
      images: imageUrls,
      slug: slugify(title, { lower: true }),
    });

    await newPost.save();

    return res.status(201).json({
      message: "Post created successfully",
      post: newPost,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

export const getPostController = async(req, res)=>{
     try {
      const post = await Post.findOne({slug:req.params.slug}) 
      .select("images")
      .populate("category");
      return res.status(200).send({
        success: true,
        message:"post fetched succesfully",
        post,
      })
     } catch (error) {
      console.log(error);
      return res.status(500).send({
        success:"false",
        message:"Error while geting post",
        error,
      });
     }
};

export const getAllPostcontroller = async(req, res)=>{
 try {
  const posts = await Post.find({}).populate("category");
  return res.status(200).send({
    success:"true",
    message:"posts fetched succesfully",
    posts,
  });
  
 } catch (error) {
  console.log(error);
      return res.status(500).send({
        success:"false",
        message:"Error while geting post",
        error,
      });
 }
};

export const updatePostcontroller = async (req,res)=>{
    try {
      const {id} = req.params;
      const{ title, hotelLocation, description, facilities, nearArea, 
        Category, guest, isAvailable, price} = req.body;

        const files = req.files?.images;
        const post = await post.findById(id);
        if(!post){
          return res.status(404).json({message:"Post not found"});
        }
        if(
          !title &&
          !hotelLocation &&
          !description &&
          !facilities &&
          !nearArea &&
          !Category &&
          !guest &&
          !isAvailable  === undefined &&
          !price &&
          !files
        ){
          return res.status(400).json({
            message:"No field provided to update."
          });

        }
        let uploadImages = post.images;
        if(files && file.length === 3){
          await Promise.all(
            Post.images.map((url) =>{
              const publicId = url.split("/").pop().split(".")["0"];
              return cloudinary.uploader.destroy(publicId); 
            })
          )
          //upload new images
          uploadImages = await Promise.all(
            files.map((file)=>{
              cloudinary.uploader
              .upload(file.tempFilePath)
              .then((result)=> result.secure_url)
            })
          );
        }else if(files && files.length !== 3){
          return res.status(400)
          .json({message:"please upload exactly 3 images."});
        }
        //update the post
        const updatePost = await post.findByIdAndUpdate(id,{
          ...(title && {title}),
          ...(hotelLocation && {hotelLocation}),
          ...(description && {description}),
          ...(facilities && {facilities}),
          ...(nearArea && {nearArea}),
          ...(Category && {Category}),
          ...(guest && {guest}),
          ...(isAvailable !== undefined && {isAvailable}),
          ...(price && {price}),
          ...(files && {images: uploadImages}),
          ...(title && {slug: slug(title,{lower:true})}),
          
        });
        await updatePost .save();
        return res.status(200).send({
          success:true,
          message:"post update successfully",
          updatePost,
        });
      
    } catch (error) {
       console.log(error);
      return res.status(500).send({
        success:"false",
        message:"Error while update post",
        error,
      });
    }
};

export const deletePostcontroller = async (req, res)=>{
  try {
    await Post.findByIdAndDelete(req.params.id);
    return res.status(200).send({
      success: true,
      message:"post deleted successfuly",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message:"error while deleting post",
      error,
    });
  }
}