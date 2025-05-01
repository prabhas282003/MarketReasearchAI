import React from 'react';
import { BrainCircuit } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BrainCircuit size={32} className="text-white" />
            <div>
              <h1 className="text-2xl font-bold tracking-tight">AI Use Case Generator</h1>
              <p className="text-indigo-200 text-sm">Multi-Agent Research & Recommendation System</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-indigo-200 transition-colors">Dashboard</a>
            <a href="#" className="hover:text-indigo-200 transition-colors">About</a>
            <a href="#" className="hover:text-indigo-200 transition-colors">Contact</a>
          </nav>
          <button className="md:hidden text-white focus:outline-none">
            <BrainCircuit size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;