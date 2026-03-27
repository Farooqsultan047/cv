// server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./Routes/auth');
const cvRoutes = require('./Routes/cv');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/cvs', cvRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});