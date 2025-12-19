import React, { useState } from 'react';
import { Search, CheckCircle } from 'lucide-react';

export const Watchtower: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-32 bg-[#05080f] relative overflow-hidden">
        {/* Background Grids */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
            
            {/* Text Side */}
            <div className="flex-1 space-y-6">
                <div className="inline-flex items-center space-x-2 text-green-400 bg-green-900/20 px-3 py-1 rounded-full text-xs font-medium border border-green-500/20">
                    <CheckCircle className="w-3 h-3" />
                    <span>AUDIT READY</span>
                </div>
                <h2 className="text-4xl font-bold leading-tight">100% Verifiable, <br/> Zero-Hallucination.</h2>
                <p className="text-gray-400 text-lg">
                    Don't just trust the output. Verify it. Lucy's "Watchtower" feature lets you trace every generated number back to its exact pixel location in the source PDF.
                </p>
                <div className="pt-4 grid grid-cols-2 gap-6">
                    <div>
                        <div className="text-3xl font-bold text-white">0</div>
                        <div className="text-sm text-gray-500">Hallucinations</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-white">100%</div>
                        <div className="text-sm text-gray-500">Attribution</div>
                    </div>
                </div>
            </div>

            {/* Interactive Visual Side */}
            <div className="flex-1 w-full max-w-md">
                <div className="relative rounded-xl bg-midnight border border-white/10 shadow-2xl overflow-hidden group">
                    {/* Header */}
                    <div className="h-10 bg-black/40 border-b border-white/5 flex items-center px-4 justify-between">
                         <span className="text-xs text-gray-500 font-mono">Traceability_View</span>
                         <div className="flex space-x-1.5">
                             <div className="w-2 h-2 rounded-full bg-white/20"></div>
                             <div className="w-2 h-2 rounded-full bg-white/20"></div>
                         </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-6">
                        {/* Extracted Data Point */}
                        <div className="bg-indigo-500/10 border border-indigo-500/30 p-4 rounded-lg relative cursor-pointer hover:bg-indigo-500/20 transition-colors">
                            <label className="text-[10px] text-indigo-300 uppercase font-bold tracking-wider mb-1 block">Extracted Value</label>
                            <div className="flex justify-between items-center">
                                <span className="text-2xl text-white font-mono">$45.2M</span>
                                <Search className="w-4 h-4 text-indigo-400" />
                            </div>
                            
                            {/* Popover Effect */}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-black border border-white/20 rounded-lg p-3 shadow-xl z-20 animate-float">
                                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-black border-t border-l border-white/20 rotate-45"></div>
                                <div className="text-[10px] text-gray-400 mb-2">Source: page_14.pdf (Paragraph 3)</div>
                                <div className="bg-white text-black p-2 rounded text-[10px] font-serif leading-tight opacity-90">
                                    ...consolidated revenue of <span className="bg-yellow-300">$45.2 million</span>, representing a 12% increase year-over-year...
                                </div>
                            </div>
                        </div>

                         <div className="bg-white/5 border border-white/5 p-4 rounded-lg opacity-50">
                            <label className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-1 block">Next Value</label>
                             <div className="h-6 w-24 bg-gray-700 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  );
};