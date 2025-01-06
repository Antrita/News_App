import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NewsProvider } from './context/NewsContext';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Article from './pages/Article';
import Reviews from './pages/Reviews';
import LatestNews from './pages/LatestNews';
import Contact from './components/Contact.jsx';
const App = () => {
  return (
    <NewsProvider>
      <Router>
        <div className="min-h-screen bg-off-white">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/article/:uuid" element={<Article />} />
              <Route path="/category/:category" element={<Home />} />
              <Route path="/latest-news" element={<LatestNews />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Sidebar />
          <footer className="bg-charcoal text-white py-8 mt-16">
            <div className="container mx-auto px-4">
              <p className="text-center">&copy; 2024 News Website. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </Router>
    </NewsProvider>
  );
};

export default App;