// src/pages/Reviews/Reviews.jsx
import React from 'react';
import './Reviews.css';

const Reviews = () => {
  // Manual article data grouped by category
  const reviewData = {
    Politics: [
      {
        title: "Global Summit Addresses Climate Change",
        excerpt: "World leaders gather to discuss new environmental policies and climate action plans.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
        author: "John Smith",
        timeAgo: "2 hours ago"
      },
      {
        title: "New Economic Policy Announced",
        excerpt: "Government reveals comprehensive plan to boost economic growth and employment.",
        image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e",
        author: "Emma Johnson",
        timeAgo: "5 hours ago"
      },
      {
        title: "Diplomatic Relations Strengthen",
        excerpt: "Key nations sign historic agreement to promote international cooperation.",
        image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9",
        author: "Michael Brown",
        timeAgo: "1 day ago"
      },
      {
        title: "Local Government Reform",
        excerpt: "New initiatives aim to improve municipal governance and citizen services.",
        image: "https://images.unsplash.com/photo-1533922922960-9fceb9ef4733",
        author: "Sarah Wilson",
        timeAgo: "2 days ago"
      }
    ],
    Business: [
      {
        title: "Tech Giant Launches New Product",
        excerpt: "Revolutionary device set to transform consumer electronics market.",
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
        author: "David Lee",
        timeAgo: "3 hours ago"
      },
      {
        title: "Startup Secures Major Investment",
        excerpt: "Innovative company attracts significant venture capital funding.",
        image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc",
        author: "Lisa Chen",
        timeAgo: "6 hours ago"
      },
      {
        title: "Market Report Shows Growth",
        excerpt: "Latest financial analysis reveals positive economic indicators.",
        image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f",
        author: "Robert Taylor",
        timeAgo: "1 day ago"
      },
      {
        title: "Retail Sector Innovation",
        excerpt: "Major retailers adopt new technologies to enhance shopping experience.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
        author: "Anna White",
        timeAgo: "3 days ago"
      }
    ],
    Technology: [
      {
        title: "AI Breakthrough in Healthcare",
        excerpt: "New artificial intelligence system improves medical diagnosis accuracy.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
        author: "Tech Review Team",
        timeAgo: "4 hours ago"
      },
      {
        title: "5G Network Expansion",
        excerpt: "Next-generation wireless technology reaches more cities globally.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
        author: "James Wilson",
        timeAgo: "1 day ago"
      },
      {
        title: "Cybersecurity Updates",
        excerpt: "Latest developments in protecting digital infrastructure.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
        author: "Security Team",
        timeAgo: "2 days ago"
      },
      {
        title: "Green Tech Solutions",
        excerpt: "Innovative environmental technologies gaining widespread adoption.",
        image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f",
        author: "Green Tech Review",
        timeAgo: "4 days ago"
      }
    ],
    Sports: [
      {
        title: "Championship Final Results",
        excerpt: "Dramatic conclusion to major sports tournament thrills fans.",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
        author: "Sports Desk",
        timeAgo: "1 hour ago"
      },
      {
        title: "Team Transfer News",
        excerpt: "Major player movements shake up league standings.",
        image:"https://imgs.search.brave.com/c7BQTQd-esx5rItVa8UHo79wPXl-ZsN536s37BHJNV8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzgwLzEyLzY4/LzM2MF9GXzg4MDEy/Njg4M19xdWxQWU94/OEpzeGI4Rm1rbEd3/dDRNb1BXU1RHM3BZ/dS5qcGc",
        author: "Mark Johnson",
        timeAgo: "5 hours ago"
      },
      {
        title: "Olympic Training Update",
        excerpt: "Athletes prepare for upcoming international competition.",
        image: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
        author: "Olympic Committee",
        timeAgo: "2 days ago"
      },
      {
        title: "Local Sports Achievement",
        excerpt: "Community team celebrates historic victory in regional tournament.",
        image: "https://imgs.search.brave.com/ld7VR9dt5ulpQJbM1AYcZtYJK67DN1uIQ8n_-tJTIp0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE0/NTcyODUxMC9waG90/by9hbWVyaWNhbi1m/b290YmFsbC1vbi1z/dGFkaXVtLWZpZWxk/LWF0LXNjaG9vbC1j/YW1wdXMuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPW52RlBN/NGNRN2gwUGQwMGlZ/anIwN0RFQU0wRVJm/dF96MllmNjM4ME1N/Qnc9",
        author: "Local Sports",
        timeAgo: "3 days ago"
      }
    ]
  };

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Latest Reviews</h1>
      
      {Object.entries(reviewData).map(([category, articles]) => (
        <div key={category} className="mb-5">
          <h2 className="mb-3">{category} Reviews</h2>
          <div className="card-group">
            {articles.map((article, index) => (
              <div key={index} className="card">
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
                    <div className="d-flex align-items-center">
                      <small className="text-muted">
                        By {article.author}
                      </small>
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

export default Reviews;