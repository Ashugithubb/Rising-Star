import mongoose from "mongoose"
import express from 'express';
import cors from 'cors';
import connectDB from "./db/index.js";
import dotenv from 'dotenv';
dotenv.config();
import bcrypt from 'bcryptjs';
import User from './models/temp.js';

const app = express();


app.use(express.json()); // Middleware to parse JSON request bodies

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

connectDB().then(() => {
    app.listen(3000, () => {
        console.log(`Server running at http://localhost:3000`);
    });
}).catch((err) => {
    console.log("DB connection failed", err);
});

app.get('/', (req, res) => {
    res.send("Server is Ready");
});

app.post('/register', async (req, res) => {
    const { userId,name,fees,grade,password,date } = req.body;
    try {
        const user = new User({userId,name,fees,grade,password,date});
        await user.save();
        res.status(201).send('Student registered');
    } catch (error) {
        res.status(400).send("Student Already exist");
    }
});

app.post('/login',async (req,res) =>{
    const {userId,password} = req.body;
    try{
        const user = await User.findOne({userId});
        if(!user){
            return res.status(401).send("Student not registred");
            
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(401).send("Invalid Credential");
        }
        res.status(200).send("Login Successfull");
    }
    catch(error){
        return res.status(500).send("Server Error");
    }
})
