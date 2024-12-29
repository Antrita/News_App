const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const newsRoutes = require('./routes/newsRoutes');
const limiter = require('./middleware/rateLimiter');
const { errorHandler } = require('./utils/errorHandler');
const config = require('./config/config');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(limiter);

// Routes
app.use('/api/news', newsRoutes);

// Error handling
app.use(errorHandler);

module.exports = app;