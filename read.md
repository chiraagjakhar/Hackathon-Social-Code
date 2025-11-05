# 🚨 Emergency Services App

A real-time emergency reporting system that connects citizens with emergency services (Hospital, Fire Brigade, Police, Municipality) through GPS location tracking and image capture.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [File Descriptions](#file-descriptions)
- [Troubleshooting](#troubleshooting)

## ✨ Features

### Citizen Portal (one.html)
- 🏥 **Emergency Services**: Hospital, Fire Brigade, Police
- 🏛️ **Non-Emergency Services**: Municipality
- 📸 **Image Capture**: Real-time webcam capture
- 📍 **GPS Location**: Automatic location detection
- 📱 **Mobile Responsive**: Works on all devices
- ✅ **Real-time Feedback**: Success/error notifications

### Authority Dashboard (services.html)
- 📊 **Live Dashboard**: Real-time report monitoring
- 🔍 **Filter by Service**: View reports by emergency type
- 📈 **Statistics**: Total reports per service
- 🗺️ **Google Maps Integration**: Direct map links
- 🖼️ **Image Preview**: Click to view full-size images
- 🔄 **Auto-refresh**: Updates every 10 seconds

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3 (Custom styling with gradients)
- Vanilla JavaScript
- MediaDevices API (Camera access)
- Geolocation API (GPS tracking)

### Backend
- Node.js
- Express.js
- MySQL 2
- CORS
- Body Parser

### Database
- MySQL

## 📁 Project Structure

```
emergency-app/
│
├── one.html              # Citizen portal (report submission)
├── services.html         # Authority dashboard (view reports)
├── server.js             # Express backend server
├── package.json          # Node.js dependencies
├── package-lock.json     # Lock file
└── README.md            # Documentation (this file)
```

## 📦 Prerequisites

Before running this application, make sure you have:

1. **Node.js** (v18 or higher)
   - Download from: https://nodejs.org/

2. **MySQL** (v8.0 or higher)
   - Download from: https://dev.mysql.com/downloads/mysql/

3. **Modern Web Browser**
   - Chrome, Firefox, Edge, or Safari
   - Camera and location permissions enabled

## 🚀 Installation

### Step 1: Clone or Download the Project

```bash
# If using Git
git clone <your-repo-url>
cd emergency-app

# Or simply extract the ZIP file
```

### Step 2: Install Node.js Dependencies

```bash
npm install
```

This will install:
- `express` (v5.1.0) - Web framework
- `mysql2` (v3.15.3) - MySQL database driver
- `body-parser` (v2.2.0) - Parse JSON requests
- `cors` (v2.8.5) - Enable cross-origin requests

## 🗄️ Database Setup

### Step 1: Start MySQL

Make sure your MySQL server is running.

**Windows:**
```bash
# Start MySQL service
net start MySQL80
```

**macOS:**
```bash
# Start MySQL
mysql.server start
```

**Linux:**
```bash
# Start MySQL
sudo systemctl start mysql
```

### Step 2: Create Database and Table

Open MySQL command line or MySQL Workbench and run:

```sql
-- Create database
CREATE DATABASE IF NOT EXISTS emergency_app;

-- Use the database
USE emergency_app;

-- Create reports table
CREATE TABLE IF NOT EXISTS reports (
  id INT AUTO_INCREMENT PRIMARY KEY,
  service VARCHAR(100) NOT NULL,
  latitude DECIMAL(10, 8) NOT NULL,
  longitude DECIMAL(11, 8) NOT NULL,
  captured_image LONGTEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Verify table creation
DESCRIBE reports;
```

### Step 3: Configure Database Connection

Edit `server.js` if your MySQL has a password:

```javascript
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "YOUR_PASSWORD_HERE",  // Add your password
  database: "emergency_app",
});
```

## ▶️ Running the Application

### Step 1: Start the Backend Server

```bash
node server.js
```

You should see:
```
==================================================
🚨 EMERGENCY APP SERVER STARTED
==================================================
📍 Server URL: http://localhost:3000
📝 Citizen Portal: Open one.html in browser
👮 Authority Dashboard: Open services.html in browser
==================================================
✅ Connected to MySQL database
```

### Step 2: Open Citizen Portal

1. Open `one.html` in your web browser
2. Allow camera and location permissions when prompted

### Step 3: Open Authority Dashboard

1. Open `services.html` in another browser tab/window
2. Dashboard will automatically load reports

## 📖 Usage

### For Citizens (Submitting Reports)

1. **Open one.html** in your browser
2. **Select Emergency Type**:
   - Click Hospital (red)
   - Click Fire Brigade (orange)
   - Click Police (blue)
   - Click Municipality (green)
3. **Allow Permissions**:
   - Camera access
   - Location access
4. **Capture Evidence**:
   - Camera will activate automatically
   - Click "Capture & Submit"
5. **Confirmation**:
   - Success message with Report ID
   - Modal closes automatically

### For Authorities (Viewing Reports)

1. **Open services.html** in your browser
2. **View Statistics**:
   - Total reports
   - Reports per service type
3. **Filter Reports**:
   - Click "All Reports" (default)
   - Or filter by specific service
4. **View Details**:
   - Click image to view full size
   - Click "View on Google Maps" for location
5. **Refresh**:
   - Click "🔄 Refresh" button
   - Or wait for auto-refresh (10 seconds)

## 🔌 API Endpoints

### Base URL
```
http://localhost:3000
```

### Endpoints

#### 1. Test Server
```http
GET /
```
**Response:**
```json
{
  "message": "Emergency App API is running!",
  "endpoints": {
    "upload": "POST /upload",
    "reports": "GET /reports",
    "reportsByService": "GET /reports/:service"
  }
}
```

#### 2. Submit Report
```http
POST /upload
Content-Type: application/json
```
**Request Body:**
```json
{
  "service": "Hospital",
  "latitude": 28.6139,
  "longitude": 77.2090,
  "captured_image": "data:image/png;base64,..."
}
```
**Response:**
```json
{
  "message": "Report submitted successfully",
  "id": 123
}
```

#### 3. Get All Reports
```http
GET /reports
```
**Response:**
```json
[
  {
    "id": 1,
    "service": "Hospital",
    "latitude": 28.6139,
    "longitude": 77.2090,
    "captured_image": "data:image/png;base64,...",
    "status": "pending",
    "created_at": "2024-01-15T10:30:00.000Z"
  }
]
```

#### 4. Get Reports by Service
```http
GET /reports/:service
```
**Example:**
```http
GET /reports/Hospital
```

#### 5. Mark Report as Resolved
```http
PUT /reports/:id/resolve
```
**Example:**
```http
PUT /reports/123/resolve
```

## 📄 File Descriptions

### 1. one.html (Citizen Portal)
- **Purpose**: Emergency report submission interface
- **Features**:
  - Service selection buttons
  - Webcam integration
  - GPS location capture
  - Image capture and submission
  - Real-time status feedback
- **Key Functions**:
  - `openGPSModal(service)` - Opens report modal
  - `closeGPSModal()` - Closes modal and stops camera
  - `captureBtn.addEventListener` - Handles submission

### 2. services.html (Authority Dashboard)
- **Purpose**: Real-time emergency report monitoring
- **Features**:
  - Live statistics dashboard
  - Service-based filtering
  - Image preview modal
  - Google Maps integration
  - Auto-refresh functionality
- **Key Functions**:
  - `loadReports()` - Fetches reports from server
  - `displayReports()` - Renders report cards
  - `filterReports(filter)` - Filters by service type
  - `displayStats()` - Shows statistics

### 3. server.js (Backend Server)
- **Purpose**: API server and database interface
- **Features**:
  - RESTful API endpoints
  - MySQL connection management
  - CORS enabled
  - Error handling
  - Request logging
- **Key Routes**:
  - `POST /upload` - Save new reports
  - `GET /reports` - Fetch all reports
  - `GET /reports/:service` - Filter by service
  - `PUT /reports/:id/resolve` - Update status

### 4. package.json
- **Purpose**: Node.js project configuration
- **Contains**:
  - Project metadata
  - Dependencies list
  - Scripts configuration
  - Module type (ES6)

## 🔧 Troubleshooting

### Issue: Server won't start

**Error:** `MySQL connection failed`

**Solution:**
1. Check if MySQL is running
2. Verify database credentials in `server.js`
3. Ensure `emergency_app` database exists
4. Check if port 3000 is available

```bash
# Check MySQL status
mysql -u root -p -e "SELECT 1"

# Check if port 3000 is in use
netstat -ano | findstr :3000    # Windows
lsof -i :3000                    # Mac/Linux
```

### Issue: Cannot access camera

**Error:** `Cannot access webcam`

**Solution:**
1. Check browser permissions (Settings → Privacy → Camera)
2. Ensure HTTPS or localhost
3. Close other apps using camera
4. Try different browser

### Issue: Reports not appearing in dashboard

**Problem:** Submit works but dashboard is empty

**Solution:**
1. Check if server is running (`node server.js`)
2. Open browser console (F12) and check for errors
3. Verify database has data:
   ```sql
   USE emergency_app;
   SELECT * FROM reports;
   ```
4. Check if CORS is enabled in `server.js`
5. Ensure both files use same server URL (`http://localhost:3000`)

### Issue: CORS errors

**Error:** `Access-Control-Allow-Origin`

**Solution:**
Already handled in `server.js` with:
```javascript
app.use(cors());
```

If still getting errors:
```javascript
// Add specific CORS configuration
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT'],
  allowedHeaders: ['Content-Type']
}));
```

### Issue: Image too large error

**Error:** `Request entity too large`

**Solution:**
Increase body parser limit in `server.js`:
```javascript
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
```

### Issue: Location not detected

**Error:** `Location not available`

**Solution:**
1. Check browser location permissions
2. Ensure HTTPS (or use localhost)
3. Wait a few seconds for GPS lock
4. Try different browser

## 🌐 Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Camera | ✅ | ✅ | ✅ | ✅ |
| Location | ✅ | ✅ | ✅ | ✅ |
| Fetch API | ✅ | ✅ | ✅ | ✅ |

## 📱 Mobile Support

The application is fully responsive and works on:
- 📱 iOS (Safari)
- 🤖 Android (Chrome)
- Tablets
- Desktop browsers

## 🔒 Security Considerations

### Current Implementation
- Basic input validation
- No authentication (prototype)
- No data encryption

### For Production
**Add these features:**
1. **User Authentication**
   ```javascript
   // JWT tokens
   // Session management
   // Role-based access control
   ```

2. **Input Sanitization**
   ```javascript
   // SQL injection prevention
   // XSS protection
   // File upload validation
   ```

3. **HTTPS**
   ```javascript
   // SSL certificates
   // Secure cookies
   ```

4. **Rate Limiting**
   ```javascript
   // Prevent spam submissions
   // API throttling
   ```

## 🚀 Future Enhancements

- [ ] User authentication and authorization
- [ ] Real-time notifications (WebSocket)
- [ ] SMS/Email alerts to authorities
- [ ] Report status tracking (pending/in-progress/resolved)
- [ ] Admin panel for user management
- [ ] Report analytics and charts
- [ ] Mobile app (React Native)
- [ ] Multi-language support
- [ ] Voice recording feature
- [ ] Emergency contact integration

## 👥 Credits

- **Icons**: Icons8 (https://icons8.com)
- **Gradients**: UI Gradients
- **Database**: MySQL
- **Framework**: Express.js

## 📝 License

This is a hackathon prototype project. Feel free to modify and use for educational purposes.

## 🤝 Contributing

This is a prototype/hackathon project. For improvements:
1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open pull request

## 📞 Support

For issues or questions:
1. Check the Troubleshooting section
2. Review console logs (F12)
3. Check server logs in terminal
4. Verify database connection

## 🎯 Quick Start Checklist

- [ ] Node.js installed
- [ ] MySQL installed and running
- [ ] Database `emergency_app` created
- [ ] Table `reports` created
- [ ] Dependencies installed (`npm install`)
- [ ] Server started (`node server.js`)
- [ ] Browser permissions granted (camera + location)
- [ ] `one.html` opened in browser
- [ ] `services.html` opened in another tab
