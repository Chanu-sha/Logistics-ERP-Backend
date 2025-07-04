import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import docketRoutes from "./routes/docketRoutes.js";
import invoiceRoutes from "./routes/invoiceRoutes.js";
import statementRoutes from "./routes/statementRoutes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.CORSS_ORIGIN_URL || "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/dockets", docketRoutes);
app.use("/api/invoices", invoiceRoutes);
app.use('/api/statements', statementRoutes); 

app.get("/", (req, res) => {
  res.send("Billing Backend is up and running.");
});

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`🚀 Server listening on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });
