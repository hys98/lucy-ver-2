import React from 'react';
import { Button } from '../ui/Button';
import { ChevronRight, FileText, ArrowRight, Code, Terminal } from 'lucide-react';

export const Hero: React.FC = () => {
  const clients = [
    "Goldman Sachs", "Morgan Stanley", "BlackRock", "Citadel", "Two Sigma", "Jane Street"
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 px-6 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-midnight to-midnight">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left: Content */}
        <div className="text-left space-y-8">
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            <span className="text-xs font-medium text-indigo-300 uppercase tracking-wide">v2.0 Now Available</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            The Golden Standard for <span className="text-gradient-primary">Financial AI Data</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-xl font-light leading-relaxed">
            Eliminate hallucinations with high-fidelity, auditable data pipelines. 
            Lucy transforms messy SEC filings into pristine JSON for your LLMs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="w-full sm:w-auto text-base h-14 px-8">
              Get API Access
              <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto text-base h-14 px-8">
              View Interactive Demo
            </Button>
          </div>
        </div>

        {/* Right: Visual (PDF -> JSON Transformation) */}
        <div className="relative">
            <div className="relative w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-2 backdrop-blur-sm flex gap-4 overflow-hidden shadow-2xl group hover:border-indigo-500/30 transition-colors">
                
                {/* PDF Side */}
                <div className="flex-1 bg-white/5 rounded-xl p-4 border border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-red-500/50"></div>
                    <div className="flex items-center space-x-2 mb-4 opacity-50">
                        <FileText className="w-4 h-4 text-red-400" />
                        <span className="text-[10px] font-mono text-gray-400">10-K_FILING.pdf</span>
                    </div>
                    <div className="space-y-2 opacity-40">
                        <div className="h-2 bg-gray-400 rounded w-3/4"></div>
                        <div className="h-2 bg-gray-400 rounded w-full"></div>
                        <div className="h-2 bg-gray-400 rounded w-5/6"></div>
                        <div className="h-2 bg-gray-400 rounded w-full"></div>
                        <div className="h-16 bg-gray-500/20 rounded w-full mt-4 border border-white/10"></div>
                    </div>
                    {/* Scanning Effect */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-indigo-500/50 shadow-[0_0_20px_rgba(99,102,241,0.5)] animate-[scan_3s_linear_infinite]"></div>
                </div>

                {/* Arrow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-midnight border border-white/20 p-2 rounded-full shadow-lg">
                    <ArrowRight className="w-5 h-5 text-indigo-400 animate-pulse" />
                </div>

                {/* JSON Side */}
                <div className="flex-1 bg-[#0d1117] rounded-xl p-4 border border-indigo-500/20 relative overflow-hidden shadow-[0_0_30px_rgba(99,102,241,0.1)]">
                     <div className="flex items-center space-x-2 mb-4">
                        <Code className="w-4 h-4 text-cyan-400" />
                        <span className="text-[10px] font-mono text-indigo-300">PARSED_OUTPUT.json</span>
                    </div>
                    <div className="font-mono text-[10px] leading-relaxed text-gray-300">
                        <span className="text-purple-400">{"{"}</span><br/>
                        &nbsp;&nbsp;<span className="text-indigo-300">"fiscal_year"</span>: <span className="text-cyan-300">2024</span>,<br/>
                        &nbsp;&nbsp;<span className="text-indigo-300">"revenue"</span>: <span className="text-cyan-300">"14.2B"</span>,<br/>
                        &nbsp;&nbsp;<span className="text-indigo-300">"risk_factors"</span>: <span className="text-purple-400">{"["}</span><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">"Market volatility..."</span><br/>
                        &nbsp;&nbsp;<span className="text-purple-400">{"]"}</span><br/>
                        <span className="text-purple-400">{"}"}</span>
                    </div>
                     <div className="absolute bottom-2 right-2 text-[8px] font-mono text-green-500 bg-green-500/10 px-1 rounded">
                        CONFIDENCE: 99.9%
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Social Proof / Trust Belt */}
      <div className="max-w-7xl mx-auto mt-24 w-full">
        <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">
          Trusted by Top-Tier Institutions
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
             {clients.map((client, i) => (
                <span key={i} className="text-lg md:text-xl font-bold font-serif text-white cursor-default hover:text-indigo-200 transition-colors">
                    {client}
                </span>
             ))}
        </div>
      </div>

      <style>{`
        @keyframes scan {
            0% { top: 0%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
};