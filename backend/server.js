// your existing imports
import mongoose from "mongoose"
import express from 'express';
import cors from 'cors';
import connectDB from "./db/index.js";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
connectDB().then(() => {
    app.listen(3000, () => {
      console.log(`Server running at http://localhost:${3000}`);
    });
  }).catch((err) => {
    console.log("DB connection failed", err);
  });
// Enable CORS to allow requests from your frontend
// app.use(cors());
app.use(cors({
    origin: 'http://localhost:5173', // frontend Vite default port
    credentials: true
  }));
  

app.get('/', (req, res) => {
  res.send("Server is Ready");
});

 app.use(express.json());
app.post('/risingstars', (req, res) => {
    const { message } = req.body;
    console.log("Message received from frontend:", message);
    res.json({ reply: `Backend received: ${message}` });
  });



app.get('/risingstars', (req, res) => {
  res.json({ message: "Hello Rising Stars" });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
