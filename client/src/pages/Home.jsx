import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNews } from '../context/NewsContext';
import { newsService } from '../services/NewsService';
import CategoryFilter from '../components/CategoryFilter';
import './Home.css';

const Home = () => {
  
  const { category } = useParams();
  const { 
    state: { articles, loading, error }, 
    actions: { setLoading, setError, setArticles, setCategory }
  } = useNews();

  
  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
      
        const response = category 
          ? await newsService.getNewsByCategory(category)
          : await newsService.getTopStories();
        setArticles(response.articles);
      } catch (err) {
        setError('Failed to load news articles');
        console.error('Error fetching news:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category, setLoading, setError, setArticles]);

  
  useEffect(() => {
    setCategory(category);
  }, [category, setCategory]);

  // Extract the main article content
  const MainArticle = ({ article }) => (
    <div className="news-card news-card-small">
      <img 
        src={article.image} 
        alt={article.title} 
        className="news-card-image"
      />
      <div className="article-card-content">
        <span className="category-tag">{article.category}</span>
        <h2 className="article-card-title">
          {article.title || 'Unrecognized genius'}
        </h2>
        <p className="article-card-excerpt">
          {article.excerpt || "Rising star Alexandra's new work causes a lot of controversy in creative circles. According to the artist, the picture illustrates a state of horror."}
        </p>
        <div className="article-meta">
          <img 
            src={article.author?.avatar || '/api/placeholder/40/40'} 
            alt={article.author?.name || 'Author'} 
            className="author-avatar" 
          />
          <div className="author-info">
            <div className="author-name">
              {article.author?.name || 'Wade Warren'}
            </div>
            <div className="article-time">16h ago</div>
          </div>
        </div>
      </div>
    </div>
  );

  // Extract the featured article
  const FeaturedArticle = ({ article }) => (
    <div className="news-card news-card-large">
      <img 
        src={article.image} 
        alt={article.title} 
        className="news-card-image"
      />
      <div className="article-card-content">
        <h2 className="article-card-title">
          {article.title || 'Museum of Modern Art completed in London'}
        </h2>
      </div>
    </div>
  );

  
  const Sidebar = () => (
    <aside className="sidebar">
      <div className="number-of-day">
        <h3 className="number-of-day-title">NUMBER OF THE DAY</h3>
        <div className="number-of-day-value">$80,000</div>
        <p className="number-of-day-description">
          was earned at a charity auction in Paris. The money raised goes to
          children's hospitals.
        </p>
      </div>

      <div className="installation-stats">
        <h3 className="installation-title">Installation per million</h3>
        <img 
          src="/api/placeholder/400/200" 
          alt="Installation statistics" 
          className="installation-image"
        />
        <p className="installation-description">
          During the first two days of the exhibition, Pierre was visited by more
          than 30,000 people. The artist did not expect that his installation would
          arouse such interest.
        </p>
      </div>
    </aside>
  );

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner" />
      </div>
    );
  }

  return (
    <div className="page-container">
      <h1 className="page-title">Latest News</h1>
      
     
      <CategoryFilter />

     
      {error && <div className="error-message">{error}</div>}

    
      <div className="news-grid">
       
        {articles[0] && <MainArticle article={articles[0]} />}

        
        {articles[1] && <FeaturedArticle article={articles[1]} />}

      
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;