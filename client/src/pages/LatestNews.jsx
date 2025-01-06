// src/pages/LatestNews/LatestNews.jsx
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './LatestNews.css';

const LatestNews = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Sample news data with full content
  const newsData = {
    "Breaking News": [
      {
        id: "1",
        title: "Global Climate Summit Reveals New Environmental Initiatives",
        excerpt: "World leaders announce groundbreaking environmental protection measures at the recent Global Climate Summit, establishing new targets for emission reduction.",
        fullContent: `In a groundbreaking development at the recent Global Climate Summit, world leaders and environmental experts gathered to address the pressing challenges of climate change and establish ambitious new targets for environmental protection. [...]`, // Your full content here
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
        author: "John Smith",
        timeAgo: "2 hours ago",
        category: "Environment"
      },
      {
        id: "2",
        title: "Technological Breakthrough in Quantum Computing",
        excerpt: "Scientists achieve major milestone in quantum computing development, potentially revolutionizing data processing capabilities.",
        fullContent: `A revolutionary breakthrough in quantum computing has researchers excited about the possibilities for future technology. The development represents a significant step forward [...]`,
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
        author: "Dr. Lisa Chen",
        timeAgo: "5 hours ago",
        category: "Technology"
      },
      {
        id: "3",
        title: "Major Economic Reform Package Announced",
        excerpt: "Government unveils comprehensive economic reforms aimed at boosting growth and reducing inflation.",
        fullContent: `The government today announced a sweeping set of economic reforms designed to address current market challenges and set the stage for sustainable growth. The package includes [...]`,
        image: "https://imgs.search.brave.com/kPC5VQbnQavNZbCyxg31iOMnT61NWXQoFrrWz1kaO0M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZXRpbWcuY29tL3Ro/dW1iL21zaWQtNzIx/NTQ3MTksd2lkdGgt/MzAwLGhlaWdodC0y/MjUsaW1nc2l6ZS00/MzMzNzMscmVzaXpl/bW9kZS03NS9pbmRp/YW4tZWNvbm9teS10/aGlua3N0b2NrLmpw/Zw",
        author: "Robert Wilson",
        timeAgo: "8 hours ago",
        category: "Economy"
      },
      {
        id: "4",
        title: "Breakthrough in Renewable Energy Storage",
        excerpt: "New battery technology promises to revolutionize renewable energy storage, making clean energy more viable.",
        fullContent: `Scientists have developed a groundbreaking new battery technology that could solve one of renewable energy's biggest challenges: efficient storage. This innovation [...]`,
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276",
        author: "Maria Garcia",
        timeAgo: "12 hours ago",
        category: "Science"
      }
    ],
    "Top Stories": [
      {
        id: "5",
        title: "Revolutionary Healthcare Innovation Transforms Treatment",
        excerpt: "New medical technology shows promising results in early trials, offering hope for previously untreatable conditions.",
        fullContent: `A revolutionary new medical technology is showing extraordinary promise in treating previously incurable conditions. The breakthrough combines artificial intelligence [...]`,
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
        author: "Dr. Michael Brown",
        timeAgo: "1 day ago",
        category: "Healthcare"
      },
      {
        id: "6",
        title: "Space Mission Discovers Potential Signs of Life",
        excerpt: "Latest deep space exploration mission reveals intriguing evidence of possible microbial life on distant moon.",
        fullContent: `In a stunning announcement that could reshape our understanding of life in the universe, scientists have revealed compelling evidence of potential microbial life [...]`,
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
        author: "Dr. Sarah Johnson",
        timeAgo: "1 day ago",
        category: "Space"
      },
      {
        id: "7",
        title: "Artificial Intelligence Makes Historic Art Discovery",
        excerpt: "AI system identifies previously unknown masterpiece, revolutionizing art authentication methods.",
        fullContent: `An artificial intelligence system has made headlines in the art world by identifying a long-lost masterpiece that had been misattributed for centuries. The breakthrough [...]`,
        image: "https://images.unsplash.com/photo-1561043433-aaf687c4cf04",
        author: "James Anderson",
        timeAgo: "2 days ago",
        category: "Arts"
      },
      {
        id: "8",
        title: "Global Sports Event Sets New Records",
        excerpt: "International competition breaks multiple world records while promoting unity through athletics.",
        fullContent: `The latest international sports competition has concluded with unprecedented achievements, setting multiple world records and showcasing extraordinary athletic talent [...]`,
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
        author: "Thomas White",
        timeAgo: "2 days ago",
        category: "Sports"
      }
    ]
  };

  const handleCardClick = (article) => {
    setSelectedArticle(article);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setSelectedArticle(null);
    window.scrollTo(0, 0);
  };

  if (selectedArticle) {
    return (
      <div className="container my-4">
        <button 
          onClick={handleBack} 
          className="btn btn-outline-light mb-4"
        >
          ← Back to Latest News
        </button>

        <article className="article-detail">
          <h1 className="mb-4">{selectedArticle.title}</h1>
          
          <div className="article-meta mb-4">
            <span className="me-3">By {selectedArticle.author}</span>
            <span className="me-3">{selectedArticle.timeAgo}</span>
            <span className="category-badge">{selectedArticle.category}</span>
          </div>

          <img 
            src={selectedArticle.image} 
            alt={selectedArticle.title}
            className="article-main-image mb-4"
          />

          <div className="article-content">
            {selectedArticle.fullContent.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Latest News</h1>
      
      {Object.entries(newsData).map(([section, articles]) => (
        <div key={section} className="mb-5">
          <h2 className="mb-3">{section}</h2>
          <div className="card-group">
            {articles.map((article) => (
              <div 
                key={article.id} 
                className="card clickable"
                onClick={() => handleCardClick(article)}
              >
                <img 
                  src={article.image} 
                  className="card-img-top"
                  alt={article.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text flex-grow-1">{article.excerpt}</p>
                  <div className="mt-auto">
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">By {article.author}</small>
                      <span className="category-badge">{article.category}</span>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <small className="text-muted">{article.timeAgo}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestNews;