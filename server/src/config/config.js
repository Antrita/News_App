require('dotenv').config();

const config = {
  port: process.env.PORT || 5000,
  newsApiKey: process.env.NEWS_API_KEY,
  nodeEnv: process.env.NODE_ENV || 'development',
  cacheTimeout: 5 * 60, 
};

module.exports = config;