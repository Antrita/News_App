
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useNews } from '../context/NewsContext';
import './CategoryFilter.css';

const CategoryFilter = () => {
 
  const navigate = useNavigate();
  const location = useLocation();
  

  const { actions: { setCategory } } = useNews();


  const categories = [
    { name: 'Politics', path: '/category/politics' },
    { name: 'Business', path: '/category/business' },
    { name: 'Tech', path: '/category/tech' },
    { name: 'Arts', path: '/category/arts' },
    { name: 'Science', path: '/category/science' },
    { name: 'Health', path: '/category/health' },
    { name: 'Sports', path: '/category/sports' }
  ];

 
  const handleCategoryClick = (category) => {

    setCategory(category.name.toLowerCase());
    //Navigate to the category 
    navigate(category.path);
  };

  //check if a category is currently active
  const isActive = (path) => {
    return location.pathname === path;
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
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;