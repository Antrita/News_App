const newsService = require('../services/newsService');
const { catchAsync } = require('../utils/errorHandler');

exports.getTopStories = catchAsync(async (req, res) => {
  const { page = 1, pageSize = 10 } = req.query;
  const data = await newsService.getTopStories(page, pageSize);
  res.json(data);
});

exports.getNewsByCategory = catchAsync(async (req, res) => {
  const { category } = req.params;
  const { page = 1, pageSize = 10 } = req.query;
  
 
  const allowedCategories = ['headlines', 'technology', 'sports', 'entertainment'];
  if (!allowedCategories.includes(category.toLowerCase())) {
    return res.status(400).json({ 
      error: 'Invalid category', 
      allowedCategories 
    });
  }

  const data = await newsService.getNewsByCategory(category, page, pageSize);
  res.json(data);
});

exports.searchArticles = catchAsync(async (req, res) => {
  const { query, page = 1, pageSize = 10 } = req.query;
  const data = await newsService.searchArticles(query, page, pageSize);
  res.json(data);
});