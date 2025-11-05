-- Create database
CREATE DATABASE IF NOT EXISTS emergency_app;
USE emergency_app;

-- Create reports table with updated schema
CREATE TABLE IF NOT EXISTS reports (
  id INT AUTO_INCREMENT PRIMARY KEY,
  service VARCHAR(50) NOT NULL,
  latitude DECIMAL(10, 8) NOT NULL,
  longitude DECIMAL(11, 8) NOT NULL,
  captured_image LONGTEXT NOT NULL,
  user_email VARCHAR(255) DEFAULT 'anonymous',
  user_name VARCHAR(255) DEFAULT 'Anonymous',
  status ENUM('pending', 'in_progress', 'resolved') DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create users table for authentication
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role ENUM('user', 'hospital', 'police', 'fire', 'municipality') NOT NULL,
  org_id VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Add indexes for better performance
CREATE INDEX idx_service ON reports(service);
CREATE INDEX idx_created_at ON reports(created_at);
CREATE INDEX idx_status ON reports(status);
CREATE INDEX idx_user_email ON reports(user_email);
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);
