import userModel from '../models/User.js';
import bcrypt from "bcrypt";
import JWT from 'jsonwebtoken'

export const registerController = async (req,res) => {
    try {
        const {name, email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                error:"please fill all the require details"
            });
        }
        const User =  await userModel.findOne({email});
        if(User){
            return res.status(400).json({
                error:"user already exits"
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(password,salt);
        const newUser = await userModel({
            name,
            email,
            password: hashedpassword,

        }).save();
        return res.status(200).send({
            success: true,
            message:"user has been registered"
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message:"problem in register API",
        });

    }
}

export const loginController = async (req, res)=>{
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                error:"All field are request"
            });
        }
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(400).json({
                error:"invalid user details"
            });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(isMatch){
           return res.status(400).json({
            error:"invalid password"
           });
        }
        const token = JWT.sign({id: user._id}, process.env.JWT_SECRET,{
            expiresIn:"7d",
        })
        return res.status(200).send({
            success:true,
            message:"login succesful",
            token,
            user:{
                id:user._id,
                name:user.name,
                email:user.email,
                role:user.role,
            },
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success:false,
            message:"login problem", 
        });
        
    }

}