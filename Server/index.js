import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
dotenv.config();
import cors from "cors"
const app=express();
import {userRouter} from "./routes/auth.js"
import cookieParser from "cookie-parser";

app.use(express.json())
app.use(cors({
    origin:["https://deploy-authproject.vercel.app"],
    methods:["GET","POST"],
    credentials:true
}))
app.use(cookieParser())
app.use("/auth",userRouter)

mongoose.connect(process.env.MYURL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
    console.log("Connected to MongoDB");
});


app.listen(process.env.PORT,()=>{
    console.log("app is running");
})