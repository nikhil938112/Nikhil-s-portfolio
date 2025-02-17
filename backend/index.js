import path from "path";
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import contactRouter from "./contact.routes.js";

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Resolve the current directory
const __dirname = path.resolve();

// Middleware to enable CORS
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Middleware to parse JSON bodies
app.use(express.json());

// Mount the router
app.use("/api", contactRouter);

// Serve static files from the frontend build directory
app.use(express.static(path.join(__dirname, "/frontend/build")));

// Catch-all route to serve the frontend's index.html
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
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