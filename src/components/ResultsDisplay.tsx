import React, { useState } from 'react';
import { useAgentContext } from '../context/AgentContext';
import CompanyInfo from './results/CompanyInfo';
import UseCaseResults from './results/UseCaseResults';
import ResourceResults from './results/ResourceResults';
import FinalProposal from './results/FinalProposal';
import { FileText, Lightbulb, Database, CheckSquare } from 'lucide-react';

const ResultsDisplay: React.FC = () => {
  const { researchData, useCaseData, resourceData, isComplete } = useAgentContext();
  const [activeTab, setActiveTab] = useState('company');

  // Only show the results if we have some data
  const hasAnyData = researchData || useCaseData.length > 0 || resourceData.length > 0;

  if (!hasAnyData) {
    return (
      <div className="bg-white rounded-xl shadow-md p-8 text-center">
        <div className="flex flex-col items-center justify-center py-12">
          <Lightbulb size={64} className="text-gray-300 mb-4" />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Ready to Generate AI Use Cases</h2>
          <p className="text-gray-500 max-w-xl">
            Enter a company name or industry to start the research process. 
            Our AI agents will analyze the data and generate relevant use cases for AI implementation.
          </p>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'company', label: 'Company Research', icon: <FileText size={18} /> },
    { id: 'usecases', label: 'Use Cases', icon: <Lightbulb size={18} /> },
    { id: 'resources', label: 'Resources', icon: <Database size={18} /> },
    { id: 'proposal', label: 'Final Proposal', icon: <CheckSquare size={18} /> }
  ];

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="border-b border-gray-200">
        <div className="flex overflow-x-auto">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center py-4 px-6 font-medium text-sm focus:outline-none whitespace-nowrap
                ${activeTab === tab.id
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
                ${tab.id === 'proposal' && !isComplete ? 'opacity-50 cursor-not-allowed' : ''}
              `}
              disabled={tab.id === 'proposal' && !isComplete}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6">
        {activeTab === 'company' && <CompanyInfo />}
        {activeTab === 'usecases' && <UseCaseResults />}
        {activeTab === 'resources' && <ResourceResults />}
        {activeTab === 'proposal' && isComplete && <FinalProposal />}
      </div>
    </div>
  );
};

export default ResultsDisplay;