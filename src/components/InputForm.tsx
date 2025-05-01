import React, { useState } from 'react';
import { Search, Building2, ArrowRight } from 'lucide-react';
import { useAgentContext } from '../context/AgentContext';

const InputForm: React.FC = () => {
  const { startAgentWorkflow, isProcessing } = useAgentContext();
  const [company, setCompany] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (company.trim()) {
      startAgentWorkflow(company.trim());
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
        <Building2 size={20} className="mr-2 text-indigo-600" />
        Company Information
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
            Company Name
          </label>
          <div className="relative">
            <input
              type="text"
              id="company"
              placeholder="e.g. Tesla, Amazon, Acme Inc."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 pl-10"
              value={company}
              onChange={e => setCompany(e.target.value)}
            />
            <Building2 
              size={18} 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isProcessing || !company.trim()}
          className={`w-full flex items-center justify-center px-4 py-2 rounded-lg text-white 
                    ${isProcessing || !company.trim()
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-indigo-600 hover:bg-indigo-700'} 
                    transition-colors duration-300 font-medium`}
        >
          {isProcessing ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : (
            <>
              Start Research <ArrowRight size={18} className="ml-2" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default InputForm;