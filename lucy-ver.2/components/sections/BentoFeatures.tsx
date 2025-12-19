import React from 'react';
import { Table, FileText, Link2, TerminalSquare } from 'lucide-react';

export const BentoFeatures: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-midnight relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Engineered for Financial Fidelity</h2>
            <p className="text-gray-400 text-lg">Most parsers break on complex financial tables. Lucy thrives on them.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[280px]">
            
            {/* Card 1: Deterministic Parsing */}
            <div className="col-span-1 md:col-span-2 glass-panel p-6 rounded-2xl flex flex-col justify-between overflow-hidden group hover:border-indigo-500/30 transition-colors">
                <div>
                    <div className="flex items-center space-x-2 mb-3">
                        <div className="p-2 bg-indigo-500/10 rounded-lg"><Table className="w-5 h-5 text-indigo-400" /></div>
                        <h3 className="font-semibold text-lg">Deterministic Parsing</h3>
                    </div>
                    <p className="text-sm text-gray-400">Reconstructs multi-page tables into semantic CSV/JSON structures without losing row/column alignment.</p>
                </div>
                {/* Visual */}
                <div className="mt-6 border border-white/10 rounded-lg bg-black/40 p-3 font-mono text-[10px] text-gray-400 overflow-hidden relative">
                    <div className="grid grid-cols-3 gap-4 border-b border-white/5 pb-2 mb-2 text-indigo-300">
                        <span>Metric</span><span>Q3 2023</span><span>Q3 2024</span>
                    </div>
                    <div className="space-y-1 opacity-70">
                        <div className="grid grid-cols-3 gap-4"><span>Revenue</span><span>$12.4M</span><span className="text-green-400">$15.2M</span></div>
                        <div className="grid grid-cols-3 gap-4"><span>Net Inc</span><span>$3.1M</span><span>$4.2M</span></div>
                        <div className="grid grid-cols-3 gap-4"><span>EBITDA</span><span>$4.5M</span><span>$5.8M</span></div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
                </div>
            </div>

            {/* Card 2: Context Chunking */}
            <div className="col-span-1 glass-panel p-6 rounded-2xl flex flex-col justify-between group hover:border-cyan-500/30 transition-colors">
                <div>
                     <div className="flex items-center space-x-2 mb-3">
                        <div className="p-2 bg-cyan-500/10 rounded-lg"><FileText className="w-5 h-5 text-cyan-400" /></div>
                        <h3 className="font-semibold text-lg">Smart Chunking</h3>
                    </div>
                    <p className="text-sm text-gray-400">Respects document hierarchy. No more split sentences.</p>
                </div>
                <div className="mt-4 space-y-2">
                    <div className="h-2 bg-gray-600/30 rounded w-full"></div>
                    <div className="h-2 bg-gray-600/30 rounded w-3/4"></div>
                    <div className="flex gap-1 mt-2">
                         <div className="h-1 bg-cyan-500/50 rounded w-1/3"></div>
                         <div className="h-1 bg-cyan-500/50 rounded w-1/3"></div>
                    </div>
                </div>
            </div>

            {/* Card 3: Metadata Injection */}
            <div className="col-span-1 glass-panel p-6 rounded-2xl flex flex-col justify-between group hover:border-purple-500/30 transition-colors">
                 <div>
                     <div className="flex items-center space-x-2 mb-3">
                        <div className="p-2 bg-purple-500/10 rounded-lg"><Link2 className="w-5 h-5 text-purple-400" /></div>
                        <h3 className="font-semibold text-lg">Citation Links</h3>
                    </div>
                    <p className="text-sm text-gray-400">Every snippet links back to the original source page.</p>
                </div>
                 <div className="mt-4 flex items-center justify-center">
                    <div className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs text-purple-300">
                        source_url: "sec.gov/..."
                    </div>
                </div>
            </div>

             {/* Card 4: Dev API */}
            <div className="col-span-1 md:col-span-2 lg:col-span-4 glass-panel p-8 rounded-2xl flex flex-col md:flex-row items-center gap-8 group hover:border-white/20 transition-colors">
                <div className="flex-1">
                     <div className="flex items-center space-x-2 mb-3">
                        <div className="p-2 bg-white/5 rounded-lg"><TerminalSquare className="w-5 h-5 text-white" /></div>
                        <h3 className="font-semibold text-lg">Developer-First API</h3>
                    </div>
                    <p className="text-gray-400 max-w-md">Integrate in minutes. Python and Node.js SDKs available with full type safety.</p>
                </div>
                <div className="flex-1 w-full bg-[#0d1117] border border-white/10 rounded-lg p-4 font-mono text-sm overflow-hidden shadow-inner">
                    <div className="flex space-x-1.5 mb-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                    </div>
                    <div className="text-gray-300">
                        <span className="text-purple-400">import</span> lucy <span className="text-purple-400">from</span> <span className="text-green-400">'@lucy/sdk'</span>;<br/><br/>
                        <span className="text-indigo-400">const</span> data = <span className="text-purple-400">await</span> lucy.extract(<span className="text-purple-400">{"{"}</span><br/>
                        &nbsp;&nbsp;url: <span className="text-green-400">"https://sec.gov/..."</span>,<br/>
                        &nbsp;&nbsp;schema: <span className="text-green-400">"financials"</span><br/>
                        <span className="text-purple-400">{"}"}</span>);
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};