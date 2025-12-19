import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/sections/Hero';
import { ProductStack } from './components/sections/ProductStack'; // Infrastructure Flow
import { BentoFeatures } from './components/sections/BentoFeatures'; // New Feature Grid
import { Comparison } from './components/sections/Comparison'; // New Comparison Section
import { UseCases } from './components/sections/UseCases';
import { Watchtower } from './components/sections/Watchtower'; // New Developer Section
import { FooterCTA } from './components/sections/FooterCTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen font-sans text-slate-200 bg-midnight selection:bg-indigo-500/30">
      <div className="relative flex flex-col z-10">
        <Navbar />
        
        <main>
          <Hero />
          <ProductStack />
          <BentoFeatures />
          <Comparison />
          <UseCases />
          <Watchtower />
          <FooterCTA />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;