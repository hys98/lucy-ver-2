import React from 'react';

export const Comparison: React.FC = () => {
  return (
    <section id="comparison" className="py-24 bg-midnight border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Traditional (Bad) */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-red-400">Traditional Extraction</h3>
                    <span className="text-xs px-2 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/20">UNRELIABLE</span>
                </div>
                <div className="bg-red-950/10 border border-red-500/10 rounded-xl p-6 font-mono text-xs text-gray-500 h-[300px] overflow-hidden relative">
                    <p className="line-through opacity-50">Revenue for 2023 was 14.2 which is an increase of...</p>
                    <p className="mt-2">Table 1. Financials <br/> Q3 -- 12,4 -- 15,,2 <br/> Net Inc -- 3.1 | 4.2</p>
                    <p className="mt-4 text-red-400/50 font-bold">[ERROR] Layout detection failed.</p>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-midnight/50"></div>
                </div>
            </div>

            {/* Right: Lucy (Good) */}
             <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-cyan-400">LUCY Precision</h3>
                    <span className="text-xs px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">STRUCTURED</span>
                </div>
                <div className="bg-cyan-950/10 border border-cyan-500/20 rounded-xl p-6 font-mono text-xs text-indigo-100 h-[300px] overflow-hidden relative shadow-[0_0_30px_rgba(34,211,238,0.05)]">
                    <span className="text-purple-400">{"{"}</span>
                    <div className="pl-4 border-l border-white/10 ml-1 mt-1 space-y-1">
                        <div><span className="text-indigo-300">"revenue_2023"</span>: <span className="text-green-400">14200000000</span>,</div>
                        <div><span className="text-indigo-300">"yoy_growth"</span>: <span className="text-green-400">0.12</span>,</div>
                        <div><span className="text-indigo-300">"quarterly_breakdown"</span>: <span className="text-purple-400">{"["}</span></div>
                        <div className="pl-4">
                            <span className="text-purple-400">{"{"}</span> <span className="text-indigo-300">"period"</span>: <span className="text-green-400">"Q3"</span>, <span className="text-indigo-300">"value"</span>: <span className="text-green-400">15200000</span> <span className="text-purple-400">{"}"}</span>,
                        </div>
                         <div className="pl-4">
                            <span className="text-purple-400">{"{"}</span> <span className="text-indigo-300">"period"</span>: <span className="text-green-400">"Q2"</span>, <span className="text-indigo-300">"value"</span>: <span className="text-green-400">12400000</span> <span className="text-purple-400">{"}"}</span>
                        </div>
                        <div><span className="text-purple-400">{"]"}</span></div>
                    </div>
                    <span className="text-purple-400">{"}"}</span>
                </div>
            </div>
        </div>

        {/* Metric */}
        <div className="mt-16 text-center">
            <h4 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 tracking-tighter">
                4<span className="text-4xl text-gray-500">%</span>
            </h4>
            <p className="text-red-400 mt-2 font-medium uppercase tracking-widest text-sm">Typical Industry Hallucination Rate</p>
            <p className="text-gray-500 text-sm mt-1">vs 0.0% with Lucy's Grounded Extraction</p>
        </div>

      </div>
    </section>
  );
};