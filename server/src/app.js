const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const newsRoutes = require('./routes/newsRoutes');
const limiter = require('./middleware/rateLimiter');
const { errorHandler } = require('./utils/errorHandler');
const config = require('./config/config');

const app = express();

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5000', 'http://localhost:5173'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'X-Requested-With', 'Accept'],
  credentials: true
}));
// Parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging middleware
app.use(morgan('dev'));

// Rate limiting middleware
app.use(limiter);

// Health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'healthy', 
    environment: config.nodeEnv 
  });
});

// News routes
app.use('/api/news', newsRoutes);

// 404 handler for undefined routes
app.use((req, res, next) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Cannot ${req.method} ${req.originalUrl}`
  });
});

// Global error handler
app.use(errorHandler);

module.exports = app;