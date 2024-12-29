import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { newsApi } from '../services/api/newsApi';

const Article = () => {
  const { uuid } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        const response = await newsApi.getArticle(uuid);
        
        if (response.data) {
          setArticle({
            title: response.data.title,
            content: response.data.description,
            image: response.data.image_url || '/api/placeholder/1200/600',
            category: response.data.categories?.[0] || 'General',
            author: {
              name: response.data.source || 'News Source',
              avatar: '/api/placeholder/40/40',
              role: 'Publisher',
              bio: `Content provided by ${response.data.source}`
            },
            publishedDate: new Date(response.data.published_at).toLocaleDateString(),
            readTime: '5 min read',
            url: response.data.url
          });
        }
      } catch (err) {
        setError('Failed to load article. Please try again later.');
        console.error('Error fetching article:', err);
      } finally {
        setLoading(false);
      }
    };

    if (uuid) {
      fetchArticle();
    }
  }, [uuid]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-terra-cotta"></div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error || 'Article not found'}
        </div>
        <button 
          onClick={() => navigate('/')}
          className="mt-4 text-terra-cotta hover:underline"
        >
          Return to Home
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 font-poppins">
      <article className="max-w-4xl mx-auto">
      
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <span className="bg-terra-cotta text-white px-3 py-1 rounded-full text-sm">
              {article.category}
            </span>
            <span className="text-gray-500">{article.readTime}</span>
          </div>
          
          <h1 className="text-4xl font-bold text-charcoal mb-6">
            {article.title}
          </h1>
          
        
          <div className="flex items-center space-x-4 mb-8">
            <img 
              src={article.author.avatar} 
              alt={article.author.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-medium text-charcoal">{article.author.name}</p>
              <p className="text-sm text-gray-500">
                {article.publishedDate} · {article.author.role}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <img 
            src={article.image}
            alt={article.title}
            className="w-full h-[500px] object-cover rounded-lg"
          />
        </div>

    
        <div className="prose max-w-none">
          {article.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6 text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
          
          {/* Original Source Link */}
          <div className="mt-8 p-4 bg-light-gray rounded-lg">
            <p className="text-sm text-gray-600">
              Read the full article at:{' '}
              <a 
                href={article.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-terra-cotta hover:underline"
              >
                {article.author.name}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 p-6 bg-light-gray rounded-lg">
          <h3 className="text-lg font-semibold mb-2">About the Source</h3>
          <p className="text-gray-700">{article.author.bio}</p>
        </div>
      </article>
    </div>
  );
};

export default Article;