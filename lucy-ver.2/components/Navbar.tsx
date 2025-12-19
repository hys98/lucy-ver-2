import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'border-b border-white/5 bg-midnight/80 backdrop-blur-xl' 
          : 'border-b border-transparent bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2 cursor-pointer group">
          <div className="w-8 h-8 bg-gradient-to-tr from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-indigo-500/20 transition-all">
            <span className="text-white font-bold text-lg font-mono">L</span>
          </div>
          <span className="text-lg font-semibold tracking-tight text-white group-hover:text-indigo-200 transition-colors">Lucy</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-400">
          <a href="#product" className="hover:text-white transition-colors">Product</a>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#comparison" className="hover:text-white transition-colors">Performance</a>
          <a href="#docs" className="hover:text-white transition-colors">Docs</a>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="hidden sm:inline-flex border-white/10 hover:bg-white/5">
            Login
          </Button>
          <Button size="sm">Get API Access</Button>
        </div>
      </div>
    </nav>
  );
};