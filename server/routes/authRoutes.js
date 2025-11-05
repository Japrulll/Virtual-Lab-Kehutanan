import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createUser, findUserByEmail, createUserTable } from "../models/UserModel.js";

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

// Jalankan saat server start (pastikan tabel users ada)
createUserTable();

// REGISTER
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await findUserByEmail(email);
    if (existingUser) return res.status(400).json({ message: "Email sudah terdaftar" });

    const hashed = await bcrypt.hash(password, 10);
    await createUser(username, email, hashed);
    res.status(201).json({ message: "Registrasi berhasil" });
  } catch (err) {
    console.error("❌ Error register:", err);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await findUserByEmail(email);
    if (!user) return res.status(404).json({ message: "User tidak ditemukan" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ message: "Password salah" });

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: "1h" });
    res.json({ message: "Login berhasil", token });
  } catch (err) {
    console.error("❌ Error login:", err);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
});

export default router;
