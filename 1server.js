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
  const { service, latitude, longitude, captured_image, user_email, user_name } = req.body;
  if (!service || !latitude || !longitude || !captured_image) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const sql = "INSERT INTO reports (service, latitude, longitude, captured_image, user_email, user_name, created_at) VALUES (?, ?, ?, ?, ?, ?, NOW())";
  db.query(sql, [service, latitude, longitude, captured_image, user_email || 'anonymous', user_name || 'Anonymous'], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res.status(500).json({ message: "Database error" });
    }
    console.log("🆕 New report saved:", service, latitude, longitude, "by", user_name);
    res.status(200).json({ message: "Data saved successfully", id: result.insertId });
  });
});

// Get reports by service type (for service provider dashboards)
app.get("/reports/:service", (req, res) => {
  const service = req.params.service;
  const sql = "SELECT * FROM reports WHERE service = ? ORDER BY created_at DESC LIMIT 50";
  
  db.query(sql, [service], (err, results) => {
    if (err) {
      console.error("Error fetching reports:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.status(200).json(results);
  });
});

// Get all reports (for admin)
app.get("/reports", (req, res) => {
  const sql = "SELECT * FROM reports ORDER BY created_at DESC LIMIT 100";
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching reports:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.status(200).json(results);
  });
});

app.listen(3000, () => console.log("🚀 Server running at http://localhost:3000"));
