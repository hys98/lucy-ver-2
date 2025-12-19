import React from 'react';
import { Button } from '../ui/Button';

export const FooterCTA: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden">
        {/* Full width gradient bg */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-midnight to-black"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-white">
                Power Your AI with <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Precision.</span>
            </h2>
            <p className="text-indigo-200/60 text-lg mb-12 max-w-2xl mx-auto">
                Start building with the only data infrastructure capable of meeting institutional standards for accuracy and compliance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="primary" size="lg" className="w-full sm:w-auto px-10 h-14 text-base shadow-xl">
                    Request a Demo
                </Button>
                 <Button variant="outline" size="lg" className="w-full sm:w-auto px-10 h-14 text-base border-indigo-200/20 text-indigo-100 hover:bg-indigo-500/10">
                    Contact Sales
                </Button>
            </div>
        </div>
    </section>
  );
};