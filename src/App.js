import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/pages/About/About';
import Projects from './components/pages/Projects/Projects';
import Contact from './components/pages/Contact/Contact';
import Resume from './components/pages/Resume/Resume';
import "./App.css"

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');
  const [theme, setTheme] = useState(true);

  // conditionally render the pages to navigate to
  const renderPage = () => {
    if (currentPage === 'Resume') {
      return <Resume />
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="portfolio">
      <Header />
        <div className="sections">
          <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
          {renderPage()}
        </div>
        <Footer />
    </div>
  );
}