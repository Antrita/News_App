

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const BASE_URL = 'https://api.thenewsapi.com/v1/news';

// API response into our application's format
const transformArticle = (article) => ({
  id: article.uuid,
  title: article.title,
  excerpt: article.description,
  content: article.content || article.description,
  image: article.image_url || '/api/placeholder/800/600',
  category: article.categories?.[0] || 'General',
  author: {
    name: article.source || 'News Source',
    avatar: '/api/placeholder/40/40',
    role: 'Publisher'
  },
  publishedDate: new Date(article.published_at).toLocaleDateString(),
  url: article.url,
  source: article.source
});

class NewsService {
  //handle API requests
  async fetchFromAPI(endpoint, params = {}) {
    const queryParams = new URLSearchParams({
      api_token: API_KEY,
      ...params,
    });

    try {
      const response = await fetch(`${BASE_URL}${endpoint}?${queryParams}`);
      
      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  //top stories for homepage
  async getTopStories(page = 1, limit = 10) {
    const response = await this.fetchFromAPI('/top', {
      language: 'en',
      page,
      limit
    });

    return {
      articles: response.data.map(transformArticle),
      meta: {
        page: response.meta.page,
        total: response.meta.total
      }
    };
  }

  //news by category
  async getNewsByCategory(category, page = 1, limit = 10) {
    const response = await this.fetchFromAPI('/top', {
      language: 'en',
      categories: category.toLowerCase(),
      page,
      limit
    });

    return {
      articles: response.data.map(transformArticle),
      meta: {
        page: response.meta.page,
        total: response.meta.total
      }
    };
  }

  //single article by UUID
  async getArticle(uuid) {
    const response = await this.fetchFromAPI(`/uuid/${uuid}`);
    return transformArticle(response.data);
  }

  async searchArticles(query, page = 1, limit = 10) {
    const response = await this.fetchFromAPI('/search', {
      query,
      language: 'en',
      page,
      limit
    });

    return {
      articles: response.data.map(transformArticle),
      meta: {
        page: response.meta.page,
        total: response.meta.total
      }
    };
  }
}

export const newsService = new NewsService();