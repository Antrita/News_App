require('dotenv').config();

const config = {
  port: process.env.PORT || 5000,
  newsApiKey: "KN7JgiizCx6h0nYsPBhRwIx4Dc6gJv5HVm29L0g",
  nodeEnv: process.env.NODE_ENV || 'development',
  cacheTimeout: 5 * 60, 
};

module.exports = config;