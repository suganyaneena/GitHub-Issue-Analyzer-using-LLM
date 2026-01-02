import dotenv from "dotenv";
dotenv.config(); // MUST BE LINE 1–2

console.log("SERVER ENV CHECK:", process.env.OPENAI_API_KEY);


import express from "express";
import scanRoute from "./routes/scan.js";
import analyzeRoute from "./routes/analyze.js";


// dotenv.config();
// console.log("OPENAI KEY:", process.env.OPENAI_API_KEY);
// console.log(process.env.OPENAI_API_KEY);
const app = express();
app.use(express.json());

app.use(scanRoute);
app.use(analyzeRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});