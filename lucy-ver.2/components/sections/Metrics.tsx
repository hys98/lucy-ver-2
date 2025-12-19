import React from 'react';

export const Metrics: React.FC = () => {
  const metrics = [
    { value: ">99.9%", label: "Vetted Data Quality Guarantee" },
    { value: "<50ms", label: "Real-Time API Latency" },
    { value: "99.99%", label: "Guaranteed API Uptime" },
  ];

  return (
    <section className="py-24 border-y border-white/5 bg-gradient-to-b from-black/40 to-black/80">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight">Performance That Meets Institutional Demands.</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, idx) => (
            <div key={idx} className="glass-panel p-10 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-white">
                  <path d="M12 2v20M2 12h20" />
                </svg>
              </div>
              <p className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-4 group-hover:scale-105 transition-transform origin-left duration-300">
                {metric.value}
              </p>
              <p className="text-gray-400 text-lg font-medium border-l-2 border-white/20 pl-4">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};