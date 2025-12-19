import React from 'react';
import { ShieldCheck, Lock } from 'lucide-react';

export const SocialProof: React.FC = () => {
  const clients = [
    "Global Tier 1 Institution",
    "Leading Fintech Platform",
    "Alpha Hedge Fund",
    "Quant Research Lab",
    "Neo-Bank Prime",
    "Decentralized Exchange"
  ];

  return (
    <section className="py-20 border-y border-white/5 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-10">
          Built for Enterprise Reliability. Trusted by Market Leaders.
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center opacity-70 mb-16">
          {clients.map((client, i) => (
            <div key={i} className="flex items-center justify-center">
              <span className="text-sm font-medium text-gray-400 text-center px-4 hover:text-white transition-colors cursor-default">
                {client}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex items-center space-x-3 px-6 py-3 bg-white/5 rounded-lg border border-white/10">
            <ShieldCheck className="w-5 h-5 text-green-400" />
            <span className="text-sm font-medium text-gray-300">SOC 2 Type II Certified</span>
          </div>
          <div className="flex items-center space-x-3 px-6 py-3 bg-white/5 rounded-lg border border-white/10">
            <Lock className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-medium text-gray-300">ISO 27001 Compliance</span>
          </div>
        </div>
      </div>
    </section>
  );
};