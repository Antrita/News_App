const axios = require('axios');
const config = require('../config/config');

class NewsService {
  constructor() {
    this.baseURL = 'https://newsapi.org/v2';
    this.apiKey = config.newsApiKey;
  }

  async fetchFromAPI(endpoint, params = {}) {
    try {
      const response = await axios.get(`${this.baseURL}${endpoint}`, {
        params: {
          apiKey: this.apiKey,
          ...params,
        },
      });
      return response.data;
    } catch (error) {
      console.error('News API Error:', error.response?.data || error.message);
      throw error;
    }
  }

  async getTopStories(page = 1, pageSize = 10) {
    return this.fetchFromAPI('/top-headlines', { 
      country: 'us',
      page,
      pageSize
    });
  }

  async getNewsByCategory(category, page = 1, pageSize = 10) {
    // Map our categories to NewsAPI categories
    const categoryMap = {
      'headlines': '',
      'technology': 'technology',
      'sports': 'sports', 
      'entertainment': 'entertainment'
    };

    // Validate and normalize category
    const normalizedCategory = categoryMap[category.toLowerCase()] || '';

    return this.fetchFromAPI('/top-headlines', {
      country: 'us',
      category: normalizedCategory,
      page,
      pageSize
    });
  }

  async getArticleById(articleId) {

    // You might need to modify this based on the specific API's capabilities
    throw new Error('Direct article fetching not supported by this API');
  }

  async searchArticles(query, page = 1, pageSize = 10) {
    return this.fetchFromAPI('/everything', {
      q: query,
      page,
      pageSize,
      language: 'en'
    });
  }
}

module.exports = new NewsService();