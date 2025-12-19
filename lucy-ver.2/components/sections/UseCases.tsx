import React from 'react';
import { ArrowRight, BarChart3, Code2, Scale } from 'lucide-react';

export const UseCases: React.FC = () => {
  const cases = [
    {
      icon: <BarChart3 className="w-6 h-6 text-indigo-400" />,
      title: "Asset Management",
      subtitle: "Insight Automation",
      desc: "Automatically populate investment memos with data extracted from earnings calls and 10-Ks.",
      border: "hover:border-indigo-500/50"
    },
    {
      icon: <Code2 className="w-6 h-6 text-cyan-400" />,
      title: "Fintech Developers",
      subtitle: "RAG Accuracy",
      desc: "Build chat interfaces that financial advisors can trust, powered by hallucination-free context.",
      border: "hover:border-cyan-500/50"
    },
    {
      icon: <Scale className="w-6 h-6 text-purple-400" />,
      title: "Compliance & Audit",
      subtitle: "Audit Trails",
      desc: "Every data point extracted comes with a verifiable link to the source document paragraph.",
      border: "hover:border-purple-500/50"
    }
  ];

  return (
    <section id="use-cases" className="py-24 bg-midnight">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Built for Critical Workflows</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, idx) => (
            <div key={idx} className={`glass-panel p-8 rounded-2xl group transition-all duration-300 ${item.border} hover:-translate-y-1 hover:shadow-2xl`}>
              <div className="mb-6 inline-flex p-3 bg-white/5 rounded-xl border border-white/5">
                {item.icon}
              </div>
              
              <div className="mb-4">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{item.subtitle}</span>
                <h3 className="text-xl font-bold text-white mt-1">{item.title}</h3>
              </div>
              
              <p className="text-gray-400 leading-relaxed mb-6">
                {item.desc}
              </p>

              <div className="flex items-center text-sm font-medium text-white group-hover:underline decoration-white/30 underline-offset-4 cursor-pointer">
                Learn more <ArrowRight className="w-4 h-4 ml-2 opacity-50 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};