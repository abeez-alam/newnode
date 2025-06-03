import express from "express";
import { registerController, loginController} from "../controller/User.js";
import {requireSignIn, isAdmin} from "../middlewares/Auth.js";

const app = express.Router();

app.post('/register', registerController);
app.post('/login', loginController);
// protected routes for auth
app.get("/user-auth", requireSignIn, (req, res)=>{
    res.status(200).send({ok: true});
})
app.get("/is-Admin", requireSignIn, isAdmin, (req, res)=>{
    res.status(200).send({ok: true});
})

export default app;




