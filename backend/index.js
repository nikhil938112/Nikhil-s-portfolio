import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors'; 
import contactRouter from './contant.routes.js';


dotenv.config();

const app = express();

const _dirname = path.resolve();

app.use(cors({
    origin: "http://localhost:3000", 
    credentials: true, 
}));

// Middleware to parse JSON bodies
app.use(express.json());

app.use(express.static(path.join(_dirname, "frontend/dist")));
app.get("*", (_, res) => {
  res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
});
// Mount the router
app.use('/api', contactRouter);

// Function to connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit the process with failure
    }
};

// Start the server after connecting to MongoDB
const startServer = async () => {
    await connectDB();

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

// Call the function to start the server
startServer();