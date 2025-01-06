import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useNews } from '../context/NewsContext';
import './CategoryFilter.css';

const CategoryFilter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { actions: { setCategory } } = useNews();

  // Match categories with TheNewsAPI top-level endpoints
  const categories = [
    { name: 'Headlines', path: '/category/top-headlines' },
    { name: 'Technology', path: '/category/technology' },
    { name: 'Sports', path: '/category/sports' },
    { name: 'Entertainment', path: '/category/entertainment' }
  ];

  const handleCategoryClick = async (category) => {
    try {
      // Convert category name to lowercase for API
      const categorySlug = category.name.toLowerCase().replace(' ', '-');

      // Update global state
      setCategory(categorySlug);

      // Navigate to category page
      navigate(category.path);
    } catch (error) {
      console.error('Error handling category click:', error);
    }
  };

  // Helper function to check active category
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Helper function to get category color
  const getCategoryColor = (name) => {
    const colors = {
      'Headlines': 'var(--color-terra-cotta)',
      'Technology': '#2196F3',
      'Sports': '#4CAF50',
      'Entertainment': '#9C27B0'
    };
    return colors[name] || 'var(--color-terra-cotta)';
  };

  return (
    <div className="category-filter-container">
      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category.name}
            className={`category-filter-button ${
              isActive(category.path) ? 'active' : ''
            }`}
            onClick={() => handleCategoryClick(category)}
            aria-pressed={isActive(category.path)}
            style={{
              '--category-color': getCategoryColor(category.name)
            }}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;