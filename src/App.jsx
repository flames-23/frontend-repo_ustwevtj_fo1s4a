import React from 'react';
import Hero from './components/Hero';
import MaterialGrid from './components/MaterialGrid';
import ParallaxShowcase from './components/ParallaxShowcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#070A0F] text-white">
      <Hero />
      <MaterialGrid />
      <ParallaxShowcase />
      <Footer />
    </div>
  );
}

export default App;
