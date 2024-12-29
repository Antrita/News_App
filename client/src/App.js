import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NewsProvider } from './context/NewsContext';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Article from './pages/Article';

const App = () => {
  return (
    <NewsProvider>
      <Router>
        <div className="min-h-screen bg-off-white">
          <Navigation />
          <main>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:category" element={<Home />} />
             
            </Routes>
          </main>
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