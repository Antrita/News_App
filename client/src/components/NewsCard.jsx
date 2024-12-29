import React from 'react';
import { Link } from 'react-router-dom';
import './NewsCard.css';

const NewsCard = ({ 
  title, 
  excerpt, 
  image, 
  category, 
  author, 
  timeAgo, 
  isFeature = false 
}) => {
  return (
    <article className={`news-card-container ${isFeature ? 'news-card-featured' : ''}`}>
      <div className="news-card-image-container">
        <img 
          src={image} 
          alt={title}
          className="news-card-image"
        />
        <span className="news-card-category">
          {category}
        </span>
      </div>
      
      <div className="news-card-content">
        <Link to={`/article/${encodeURIComponent(title)}`}>
          <h2 className="news-card-title">
            {title}
          </h2>
        </Link>
        
        <p className="news-card-excerpt">
          {excerpt}
        </p>
        
        <div className="news-card-footer">
          <img 
            src={author.avatar} 
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-3">
            <p className="font-medium text-charcoal">{author.name}</p>
            <p className="text-sm text-gray-500">{timeAgo}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;