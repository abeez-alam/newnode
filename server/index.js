import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { connectToDb } from './src/config/db.js';
import fileUpload from 'express-fileupload'; // all lowercase
import bodyparser from 'body-parser';
//routes
import authroutes from "./src/routes/User.js";
import postRoutes from './src/routes/Post.js';
import CategoryRoutes from './src/routes/Category.js';

dotenv.config();
connectToDb();

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(fileUpload({useTempFiles: true}));
//middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true}));

const PORT = process.env.PORT || 3000;

// ✅ Fix: Send a response back to client
app.get("/", (req, res) => {
    console.log("Welcome");  // Logs to terminal
    res.send("Welcome to the API!"); // Sends response to browser/client
});

app.use('/api/auth',authroutes);
app.use('/api/post',postRoutes);
app.use('/api/Category',CategoryRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// import mongoose, { connection } from "mongoose";

// export const  connectToDb = async() =>{
//     const uri = process.env.MONGODB_URI;
//     try{
//      await mongoose.connect(uri);
//      console.log("connected");
//     }catch (error){
//         console.log("connected failed", error);
//         process.exit(1);
//     }
//     mongoose.connection.on(error,(error)=>{
//         console.log("mongodb connection error");
//     });
// }