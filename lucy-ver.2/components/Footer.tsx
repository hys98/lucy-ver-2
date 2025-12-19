import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 border-t border-white/5 bg-black text-sm">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
        
        <div className="col-span-2 md:col-span-1 space-y-4">
           <div className="flex items-center space-x-2">
             <div className="w-6 h-6 bg-indigo-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs font-mono">L</span>
            </div>
            <span className="text-base font-semibold text-white">Lucy Data</span>
          </div>
          <p className="text-gray-500 max-w-xs">
            The infrastructure layer for financial intelligence. 
          </p>
          <div className="text-gray-600">© 2024 Lucy Data Inc.</div>
        </div>

        <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-gray-500">
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Changelog</a></li>
            </ul>
        </div>

        <div>
            <h4 className="font-semibold text-white mb-4">Developers</h4>
            <ul className="space-y-2 text-gray-500">
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Github</a></li>
            </ul>
        </div>

        <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-gray-500">
                <li><a href="#" className="hover:text-indigo-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Legal</a></li>
            </ul>
        </div>

      </div>
    </footer>
  );
};