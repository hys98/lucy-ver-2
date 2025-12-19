import React from 'react';
import { Database, ShieldCheck, Cpu } from 'lucide-react';

export const ProductStack: React.FC = () => {
  return (
    <section id="infrastructure" className="py-24 border-t border-white/5 bg-midnight relative">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Missing Link in Your RAG Pipeline</h2>
          <p className="text-gray-400">Connect raw regulatory data to your AI models with zero friction.</p>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent -translate-y-1/2 z-0"></div>

          {/* Step 1: Sources */}
          <div className="relative z-10 flex flex-col items-center">
             <div className="w-24 h-24 rounded-2xl bg-card border border-white/10 flex items-center justify-center mb-6 shadow-lg relative group">
                <Database className="w-10 h-10 text-gray-400 group-hover:text-white transition-colors" />
                <div className="absolute -inset-2 bg-gray-500/10 rounded-2xl -z-10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
             </div>
             <h3 className="text-lg font-semibold text-white">DART/SEC Sources</h3>
             <p className="text-sm text-gray-500 mt-2 max-w-[200px]">Unstructured PDFs, HTML, & filings</p>
          </div>

          {/* Animated Arrow 1 */}
          <div className="lg:flex-1 w-px h-16 lg:w-full lg:h-px relative flex items-center justify-center">
             <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse shadow-[0_0_10px_#6366F1]"></div>
          </div>

          {/* Step 2: Engine (Hero) */}
          <div className="relative z-10 flex flex-col items-center scale-110">
             <div className="w-32 h-32 rounded-full bg-midnight border border-indigo-500 flex items-center justify-center mb-6 shadow-[0_0_50px_rgba(99,102,241,0.2)] relative">
                <ShieldCheck className="w-14 h-14 text-indigo-400" />
                
                {/* Orbital Rings */}
                <div className="absolute inset-0 border border-cyan-500/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute inset-2 border border-indigo-500/20 rounded-full animate-[spin_7s_linear_infinite_reverse]"></div>
             </div>
             <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">LUCY Engine</h3>
             <p className="text-sm text-indigo-200/60 mt-2 max-w-[220px]">Deterministic Parsing & Vetting</p>
          </div>

          {/* Animated Arrow 2 */}
          <div className="lg:flex-1 w-px h-16 lg:w-full lg:h-px relative flex items-center justify-center">
             <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_#22D3EE] delay-75"></div>
          </div>

          {/* Step 3: AI Pipeline */}
          <div className="relative z-10 flex flex-col items-center">
             <div className="w-24 h-24 rounded-2xl bg-card border border-white/10 flex items-center justify-center mb-6 shadow-lg relative group">
                <Cpu className="w-10 h-10 text-gray-400 group-hover:text-white transition-colors" />
                <div className="absolute -inset-2 bg-cyan-500/10 rounded-2xl -z-10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
             </div>
             <h3 className="text-lg font-semibold text-white">Your AI/LLM</h3>
             <p className="text-sm text-gray-500 mt-2 max-w-[200px]">RAG-ready Vectors & Context</p>
          </div>

        </div>
      </div>
    </section>
  );
};