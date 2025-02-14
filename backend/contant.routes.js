import express from "express";
import expressAsyncHandler from "express-async-handler"; 
import { Contact } from "./contact.models.js";

const router = express.Router(); // Declared router

router.post(
  "/contactInfo",
  expressAsyncHandler(async (req, res) => {
    const { name, email, subject, message } = req.body;

    // Validate the request body
    if (!name || !email || !subject || !message) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }

    // Save the contact info to the database (example)
    // Assuming you have a Contact model
    const newContact = new Contact({
      name,
      email,
      subject,
      message,
    });

    await newContact.save(); // Save to the database

    res
      .status(201)
      .json({ message: "Contact info saved successfully", data: newContact });
  })
);

export default router;
