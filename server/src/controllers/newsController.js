const newsService = require('../services/newsService');
const { catchAsync } = require('../utils/errorHandler');

exports.getTopStories = catchAsync(async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const data = await newsService.getTopStories(page, limit);
  res.json(data);
});

exports.getNewsByCategory = catchAsync(async (req, res) => {
  const { category } = req.params;
  const { page = 1, limit = 10 } = req.query;
  const data = await newsService.getNewsByCategory(category, page, limit);
  res.json(data);
});

exports.getArticle = catchAsync(async (req, res) => {
  const { uuid } = req.params;
  const data = await newsService.getArticle(uuid);
  res.json(data);
});

exports.searchArticles = catchAsync(async (req, res) => {
  const { query, page = 1, limit = 10 } = req.query;
  const data = await newsService.searchArticles(query, page, limit);
  res.json(data);
});