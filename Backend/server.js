// server.js
const express = require('express');
const cors = require('cors');
const mysql = require('mysql'); // ✅ Add MySQL
require('dotenv').config();

const authRoutes = require('./Routes/auth');
const cvRoutes = require('./Routes/cv');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ---------------------------
// MySQL Database Connection
// ---------------------------
const db = mysql.createConnection({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT
});

db.connect(err => {
  if (err) {
    console.log("DB Error:", err); // Agar connect nahi hua to error show kare
  } else {
    console.log("DB Connected ✅"); // Success message
  }
});

// Agar aap DB ko routes me use karna chahte ho
app.locals.db = db; 

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/cvs', cvRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});