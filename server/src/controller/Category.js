import CategoryModel from "../models/Category.js";
import slug from "slugify";
export const createCategoryController = async(req, res)=>{
    try {
        const  {name} =req.body;
        if(!name){
            return res.status(400).json({
             message:"Name isrequired",
            });
        }
        const existinCategory = await CategoryModel.findOne({name});
        if(existinCategory){
            return res.status(400).send({
                message:"category already exist",
            });
        }
        const newCategory =  await new CategoryModel({
            name,
            slug:slug(name),
        }).save();
        return res.status(200).send({
            success:true,
            message:"category has been created",
            newCategory,
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