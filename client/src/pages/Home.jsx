import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { newsService } from '../services/NewsService';
import './Home.css';


const Home = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [articles, setArticles] = useState([
    {
      id: "1",
      title: "Global Climate Summit Reveals New Environmental Initiatives",
      excerpt: "World leaders announce groundbreaking environmental protection measures at the recent Global Climate Summit, establishing new targets for emission reduction.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
      category: "Headlines",
    },
    {
      id: "2",
      title: "Technological Breakthrough in Quantum Computing",
      excerpt: "Scientists achieve major milestone in quantum computing development, potentially revolutionizing data processing capabilities.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      category: "Technology",
    },
    
      {
        "id": "3",
        "title": "Breakthrough in Electric Vehicle Battery Technology",
        "excerpt": "Scientists develop a new battery technology for electric vehicles, promising longer ranges and faster charging times.",
        "image": "https://imgs.search.brave.com/usLIzyrRqmIek2zrQN97EXNNy7AKDe-DjMCHRZEU5iw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ3/MzEwMjc2My9waG90/by9lbGVjdHJpYy1j/YXItY2hhcmdlLXN0/YXRpb25zLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1GdC1s/VDUxaFY3aXFGY2VI/cEdDcWVVY3Y4NGJ3/UGNfX0hpN1A3Sldt/NmQ0PQ",
        "category": "Technology"
      },
      {
        "id": "4",
        "title": "AI Revolutionizes Healthcare with Faster Diagnoses",
        "excerpt": "Artificial intelligence is now enabling faster, more accurate diagnoses in the healthcare sector, improving patient outcomes.",
        "image": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
        "category": "Technology"
      },
      {
        "id": "5",
        "title": "Super Bowl LVII: A Thrilling Finale for American Football",
        "excerpt": "The Super Bowl LVII was a spectacular game, featuring a close match between the top teams of the season.",
        "image": "https://imgs.search.brave.com/10_i1_tENS4jfHjC_g0hSCtMo1cGNNjOb1vUVBf02HY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk5EaGxaVE13/TkRZdE1tRmpaaTAw/TWpBMkxUZzFNV1l0/TlRrMFlXWmtOelJq/WTJNd1hrRXlYa0Zx/Y0djQC5qcGc",
        "category": "Sports"
      },
      {
        "id": "6",
        "title": "New Space Mission to Mars Set to Launch",
        "excerpt": "A new space mission aiming to explore Mars is scheduled to launch this year, with the goal of uncovering the planet's secrets.",
        "image" : "https://imgs.search.brave.com/QgPrEVhONlcNJ3x75uEWXpq16_gKrQRlAODv7hpixeY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM5/OTg4Njk4Ni9waG90/by9wbGFuZXQtbWFy/cy1jb21wdXRlci1n/ZW5lcmF0ZWQtaW1h/Z2UuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPVFPVEVuUXdC/cTZBamVQUm83WFNu/dDFhY2dhcGxkdTM1/VjBVeldLVzlLYTA9",

        "category": "Headlines"
      },
      {
        "id": "7",
        "title": "The Future of Digital Entertainment: Virtual Reality Gaming",
        "excerpt": "Virtual reality is poised to change the entertainment industry by offering immersive gaming experiences like never before.",
        "image": "https://imgs.search.brave.com/wmvI0ViKJJP_PYwMf-RyzcX116Z-zl67tUNrNdpfhsM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMueW91cnN0b3J5/LmNvbS9jcy8xLzBi/MmMwMjgwLWQxY2It/MTFlOC04MGFiLWFi/OTFhNmM4NTFhYS9W/aXJ0dWFsLXJlYWxp/dHktZ2FtZXMtZm9y/LXN0YXJ0dXAxNTU4/MzI5MjQzMDQ3Lmpw/Zz9mbT1wbmcmYXV0/bz1mb3JtYXQmdz04/MDA",
        "category": "Entertainment"
      },
      {
        "id": "8",
        "title": "Hollywood's Big Comeback: New Films Take Over Theaters",
        "excerpt": "After a challenging period for the film industry, Hollywood is seeing a surge of new films hitting theaters and attracting large audiences.",
        "image": "https://imgs.search.brave.com/NYh3ns39sEhOpEVxJHvhFm3f8tIZMYmcHbmeF82k5k4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zLnlp/bWcuY29tL255L2Fw/aS9yZXMvMS4yL1gw/eHJBM29YTFJrRkV4/d182SnZ1TUEtLS9Z/WEJ3YVdROWFHbG5h/R3hoYm1SbGNqdDNQ/VGsyTUR0b1BUVTBN/QS0tL2h0dHBzOi8v/cy55aW1nLmNvbS9v/cy9jcmVhdHItdXBs/b2FkZWQtaW1hZ2Vz/LzIwMjMtMDEvYjNk/MTc5YTAtOTY4NS0x/MWVkLWFlYWYtYTU4/NGMwZWM4M2Fj",
        "category": "Entertainment"
      },
    
    {
      id: "9",
      title: "Major Economic Reform Package Announced",
      excerpt: "Government unveils comprehensive economic reforms aimed at boosting growth and reducing inflation.",
      image: "https://imgs.search.brave.com/kPC5VQbnQavNZbCyxg31iOMnT61NWXQoFrrWz1kaO0M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZXRpbWcuY29tL3Ro/dW1iL21zaWQtNzIx/NTQ3MTksd2lkdGgt/MzAwLGhlaWdodC0y/MjUsaW1nc2l6ZS00/MzMzNzMscmVzaXpl/bW9kZS03NS9pbmRp/YW4tZWNvbm9teS10/aGlua3N0b2NrLmpw/Zw",
      category: "Sports",
    },
    {
      id: "10",
      title: "Breakthrough in Renewable Energy Storage",
      excerpt: "New battery technology promises to revolutionize renewable energy storage, making clean energy more viable.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276",
      category: "Entertainment",
    },
    {
      id: "11",
      title: "Revolutionary Healthcare Innovation Transforms Treatment",
      excerpt: "New medical technology shows promising results in early trials, offering hope for previously untreatable conditions.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
      category: "Headlines",
    },
    {
      id: "12",
      title: "AI Revolutionizes Online Education Platforms",
      excerpt: "Advanced AI algorithms create personalized learning experiences.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
      category: "Technology",
    },
    {
      id: "13",
      title: "Sports Legends Honored at Annual Ceremony",
      excerpt: "Athletes celebrated for their extraordinary achievements.",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
      category: "Sports",
    },
    {
      id: "14",
      title: "Blockbuster Movie Breaks Records Globally",
      excerpt: "The latest blockbuster sets new records at the box office.",
      image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4",
      category: "Entertainment",
    },

  ]);

  const filterArticles = (category) => {
    return articles.filter((article) => article.category.toLowerCase() === category.toLowerCase()).slice(0, 4);
  };

  const renderArticles = (filteredArticles) => (
    <div className="news-grid">
      {filteredArticles.map((article) => (
        <div key={article.id} className="news-card">
          <img src={article.image} className="news-card-image" alt={article.title} />
          <div className="article-card-content">
            <h5 className="article-card-title">{article.title}</h5>
            <p className="article-card-excerpt">{article.excerpt}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="page-container">
      <h1 className="page-title">Latest News</h1>

      <div className="category-filters">
        <button
          className={`category-button ${!category ? 'active' : ''}`}
          onClick={() => navigate('/')}
        >
          All
        </button>
        <button
          className={`category-button ${category === 'headlines' ? 'active' : ''}`}
          onClick={() => navigate('/category/headlines')}
        >
          Headlines
        </button>
        <button
          className={`category-button ${category === 'technology' ? 'active' : ''}`}
          onClick={() => navigate('/category/technology')}
        >
          Technology
        </button>
        <button
          className={`category-button ${category === 'sports' ? 'active' : ''}`}
          onClick={() => navigate('/category/sports')}
        >
          Sports
        </button>
        <button
          className={`category-button ${category === 'entertainment' ? 'active' : ''}`}
          onClick={() => navigate('/category/entertainment')}
        >
          Entertainment
        </button>
      </div>

      {!category || category.toLowerCase() === 'all' ? (
        <>
          <h2>Headlines</h2>
          {renderArticles(filterArticles('Headlines'))}

          <h2>Technology</h2>
          {renderArticles(filterArticles('Technology'))}

          <h2>Sports</h2>
          {renderArticles(filterArticles('Sports'))}

          <h2>Entertainment</h2>
          {renderArticles(filterArticles('Entertainment'))}
        </>
      ) : (
        renderArticles(filterArticles(category))
      )}
    </div>
  );
};

export default Home;
