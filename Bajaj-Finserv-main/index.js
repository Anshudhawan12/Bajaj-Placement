require("dotenv").config();
console.log("Gemini Key:", process.env.GEMINI_API_KEY);

const express = require("express");
const app = express();
app.use(express.json());

const bfhlRoutes = require("./routes/bfhl");
const healthRoutes = require("./routes/health");

app.use("/bfhl", bfhlRoutes);
app.use("/health", healthRoutes);

// Do not call app.listen() on Vercel
module.exports = app;
