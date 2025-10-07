import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from './ui/toastr';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import Downloads from './components/Downloads';
import Videos from './components/Videos';

// Helper component to handle scroll to hash
const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash in the URL, scroll to that element
    if (hash) {
      // Use requestAnimationFrame to ensure the DOM is ready
      const scrollToElement = () => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          // Get the header height to offset the scroll position
          const header = document.querySelector('header');
          const headerHeight = header ? header.offsetHeight : 0;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      };

      // First try immediately (in case we're already on the page)
      scrollToElement();
      
      // Then try again after a short delay to handle page transitions
      const timeoutId = setTimeout(scrollToElement, 100);
      
      // And one more time after all resources are loaded
      window.addEventListener('load', scrollToElement);
      
      return () => {
        clearTimeout(timeoutId);
        window.removeEventListener('load', scrollToElement);
      };
    } else {
      // If no hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [hash]);  // Only run when hash changes

  return null;
};

function Home() {
  return (
    <>
      <Hero />
      <div id="features">
        <Features />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Helmet>
        <title>Harneet - A simple yet powerful interpreted language!</title>
        <meta name="description" content="Harneet is a simple yet powerful interpreted language combining the ease and usage of Golang/Python." />
      </Helmet>
      <div className="min-h-screen bg-black text-white flex flex-col">
        <Header />
        <main className="flex-grow">
          <ScrollToHash />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/videos" element={<Videos />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
