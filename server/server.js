import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import db from "./db.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Tes koneksi ke database
try {
  await db.query("SELECT 1");
  console.log("✅ DB connected successfully!");
} catch (err) {
  console.error("❌ DB connection failed:", err);
}

// Routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
