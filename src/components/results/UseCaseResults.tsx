import React from 'react';
import { useAgentContext } from '../../context/AgentContext';
import { Lightbulb, TrendingUp, BrainCircuit, ChevronRight } from 'lucide-react';

const UseCaseResults: React.FC = () => {
  const { useCaseData, isAgentComplete } = useAgentContext();

  if (useCaseData.length === 0 && !isAgentComplete('usecase')) {
    return (
      <div className="py-8 text-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="rounded-full bg-gray-200 h-12 w-12 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
        <p className="mt-4 text-gray-500">Generating AI use cases...</p>
      </div>
    );
  }

  if (useCaseData.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-gray-500">No use cases available yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center mb-4">
        <BrainCircuit size={24} className="text-indigo-600 mr-2" />
        <h2 className="text-xl font-bold text-gray-800">AI & GenAI Use Cases</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {useCaseData.map((useCase, index) => (
          <div 
            key={index}
            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-start">
              <div className={`p-2 rounded-full mr-3 ${
                index % 3 === 0 ? 'bg-indigo-100 text-indigo-600' : 
                index % 3 === 1 ? 'bg-emerald-100 text-emerald-600' : 
                'bg-amber-100 text-amber-600'
              }`}>
                <Lightbulb size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{useCase.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{useCase.description}</p>
                
                {useCase.benefits && useCase.benefits.length > 0 && (
                  <div className="mt-3">
                    <h4 className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Benefits</h4>
                    <ul className="mt-1 space-y-1">
                      {useCase.benefits.map((benefit, bidx) => (
                        <li key={bidx} className="text-sm text-gray-700 flex items-start">
                          <ChevronRight size={14} className="text-indigo-500 mt-1 mr-1 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="mt-3 flex items-center">
                  <TrendingUp size={14} className="text-green-500 mr-1" />
                  <span className="text-xs font-medium text-green-600">
                    {useCase.impact || 'High potential impact'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseCaseResults;