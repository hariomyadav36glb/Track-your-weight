import express from "express";
import connectDB from "./config/db.js";
import dotenv from 'dotenv'
import cors from 'cors'

import authRoutes from './routes/authRoutes.js'
import weightRoutes from './routes/weightRoutes.js'

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth' , authRoutes)
app.use('/api/weight' , weightRoutes)


const PORT = process.env.PORT || 5000;

app.listen(PORT , ()=> console.log(`Server is running on ${PORT}`));