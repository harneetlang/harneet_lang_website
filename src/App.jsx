import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from './ui/toastr';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>Harneet - A simple yet powerful interpreted language!</title>
        <meta name="description" content="Harneet is a simple yet powerful interpreted language combining the ease and usage of Golang/Python." />
      </Helmet>
      <div className="min-h-screen bg-black text-white overflow-hidden">
        <Header />
        <Hero />
        <div id="features">
          <Features />
        </div>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
