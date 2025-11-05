// server.js
import express from "express";
import mysql from "mysql2";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: "20mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "20mb" }));

// MySQL connection (edit password if your MySQL has one)
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "emergency_app",
});

db.connect((err) => {
  if (err) {
    console.error("❌ MySQL connection failed:", err);
    process.exit(1);
  } else {
    console.log("✅ Connected to MySQL database");
  }
});

// Upload endpoint
app.post("/upload", (req, res) => {
  const { service, latitude, longitude, captured_image } = req.body;
  if (!service || !latitude || !longitude || !captured_image) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const sql = "INSERT INTO reports (service, latitude, longitude, captured_image) VALUES (?, ?, ?, ?)";
  db.query(sql, [service, latitude, longitude, captured_image], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res.status(500).json({ message: "Database error" });
    }
    console.log("🆕 New report saved:", service, latitude, longitude);
    res.status(200).json({ message: "Data saved successfully", id: result.insertId });
  });
});

app.listen(3000, () => console.log("🚀 Server running at http://localhost:3000"));
