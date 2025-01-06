const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');
const cacheMiddleware = require('../middleware/cache');
const config = require('../config/config');

// Top Headlines
router.get('/', cacheMiddleware(config.cacheTimeout), newsController.getTopStories);

// Category-specific News (with validated categories)
router.get('/category/:category', 
  cacheMiddleware(config.cacheTimeout), 
  newsController.getNewsByCategory
);

// Search Articles
router.get('/search', newsController.searchArticles);

module.exports = router;