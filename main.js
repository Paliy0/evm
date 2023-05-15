// Importing express, nodemailer and cors
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

// Initialize the express app
const app = express();

// Middleware to parse the request body
app.use(express.json());

// Use cors middleware
app.use(cors());

app.post("/sendEmail", async (req, res) => {
  const { name, service, contact } = req.body;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "evminnovations@gmail.com",
      pass: "Evminnovations1!",
    },
  });

  let mailOptions = {
    from: "evminnovations@gmail.com",
    to: "contact@evminnovations.com",
    subject: `New service request from ${name}`,
    text: `${name} is looking for ${service}. Contact them at ${contact}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "There was an error processing your request" });
  }
});

app.listen(3000, () => console.log("Server is running..."));
