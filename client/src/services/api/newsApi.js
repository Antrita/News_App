
const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const BASE_URL = 'https://api.thenewsapi.com/v1/news';

const fetchFromAPI = async (endpoint, params = {}) => {
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
    console.error('Error fetching news:', error);
    throw error;
  }
};

export const newsApi = {

  getTopStories: (params = {}) => {
    return fetchFromAPI('/top', {
      language: 'en',
      limit: 10,
      ...params,
    });
  },

  // news by category
  getNewsByCategory: (category, params = {}) => {
    return fetchFromAPI('/top', {
      language: 'en',
      categories: category.toLowerCase(),
      limit: 10,
      ...params,
    });
  },

  // Search for specific news articles
  searchNews: (query, params = {}) => {
    return fetchFromAPI('/search', {
      query,
      language: 'en',
      limit: 10,
      ...params,
    });
  },

  // Get a single article by UUID
  getArticle: (uuid) => {
    return fetchFromAPI(`/uuid/${uuid}`);
  }
};