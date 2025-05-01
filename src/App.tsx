import React from 'react';
import { Menu } from 'lucide-react';
import Header from './components/Header';
import AgentWorkflow from './components/AgentWorkflow';
import InputForm from './components/InputForm';
import ResultsDisplay from './components/ResultsDisplay';
import { AgentProvider } from './context/AgentContext';

function App() {
  return (
    <AgentProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <InputForm />
              <AgentWorkflow />
            </div>
            <div className="lg:col-span-2">
              <ResultsDisplay />
            </div>
          </div>
        </main>
        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} AI Use Case Generator</p>
          </div>
        </footer>
      </div>
    </AgentProvider>
  );
}

export default App;