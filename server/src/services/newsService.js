const axios = require('axios');
const config = require('../config/config');

class NewsService {
  constructor() {
    this.baseURL = 'https://api.thenewsapi.com/v1/news';
    this.apiKey = config.newsApiKey;
  }

  async fetchFromAPI(endpoint, params = {}) {
    try {
      const response = await axios.get(`${this.baseURL}${endpoint}`, {
        params: {
          api_token: this.apiKey,
          ...params,
        },
      });
      return response.data;
    } catch (error) {
      console.error('News API Error:', error.response?.data || error.message);
      throw error;
    }
  }

  async getTopStories(page = 1, limit = 10) {
    return this.fetchFromAPI('/top', { page, limit, language: 'en' });
  }

  async getNewsByCategory(category, page = 1, limit = 10) {
    return this.fetchFromAPI('/top', {
      categories: category.toLowerCase(),
      page,
      limit,
      language: 'en'
    });
  }

  async getArticle(uuid) {
    return this.fetchFromAPI(`/uuid/${uuid}`);
  }

  async searchArticles(query, page = 1, limit = 10) {
    return this.fetchFromAPI('/search', {
      query,
      page,
      limit,
      language: 'en'
    });
  }
}

module.exports = new NewsService();