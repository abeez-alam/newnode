import jwt from "jsonwebtoken";
import User from "../models/User.js"

export const requireSignIn = async(req, res, next)=>{
    try {
        const decode =jwt.verify(req.headers.authorization,
            process.env.JWT_SECRET);
            req.User=decode;
            next();

        
    } catch (error) {
        console.log(error);
    }

};
export const isAdmin = async(req, res, next)=>{
    try {
        const user = await User.findById(req.user._id);
        if(user.role !==  "admin"){
              return res.status(401).send("unauthorized");
        }else{
            next();
        }
    } catch (error) {
         console.log(error);
    }
};