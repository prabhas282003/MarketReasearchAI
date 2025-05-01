import React from 'react';
import { useAgentContext } from '../../context/AgentContext';
import { Check, ExternalLink, FileCheck, Star } from 'lucide-react';

const FinalProposal: React.FC = () => {
  const { useCaseData, resourceData, researchData, company, industry } = useAgentContext();

  // Filter to just the top rated use cases (up to 5)
  const topUseCases = [...useCaseData]
    .sort((a, b) => (b.score || 0) - (a.score || 0))
    .slice(0, 5);

  return (
    <div className="space-y-6">
      <div className="flex items-center mb-4">
        <FileCheck size={24} className="text-emerald-600 mr-2" />
        <h2 className="text-xl font-bold text-gray-800">Final Proposal</h2>
      </div>
      
      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-6">
        <h3 className="text-emerald-800 font-medium flex items-center">
          <Check size={18} className="text-emerald-600 mr-2" />
          AI Implementation Proposal for {company || industry || 'Your Organization'}
        </h3>
        <p className="text-emerald-700 mt-2 text-sm">
          Based on comprehensive research and analysis, we've identified the following high-impact 
          AI implementation opportunities that align with your strategic objectives.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
          <Star size={20} className="text-amber-500 mr-2" />
          Top Recommended Use Cases
        </h3>
        
        <div className="space-y-4">
          {topUseCases.map((useCase, index) => {
            // Find related resources for this use case
            const relatedResources = resourceData.filter(
              resource => resource.relatedUseCase === useCase.title
            );
            
            return (
              <div 
                key={index}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center">
                  <div className="bg-indigo-100 text-indigo-800 rounded-full w-6 h-6 flex items-center justify-center mr-3">
                    <span className="text-sm font-medium">{index + 1}</span>
                  </div>
                  <h4 className="font-medium text-gray-800">{useCase.title}</h4>
                </div>
                
                <p className="text-gray-600 mt-2">{useCase.description}</p>
                
                {useCase.benefits && useCase.benefits.length > 0 && (
                  <div className="mt-3">
                    <h5 className="text-sm font-medium text-gray-700">Key Benefits:</h5>
                    <ul className="mt-1 space-y-1">
                      {useCase.benefits.slice(0, 3).map((benefit, bidx) => (
                        <li key={bidx} className="text-sm text-gray-700 flex items-start">
                          <Check size={14} className="text-emerald-500 mt-1 mr-1 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {relatedResources.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <h5 className="text-sm font-medium text-gray-700 mb-2">Implementation Resources:</h5>
                    <div className="space-y-2">
                      {relatedResources.map((resource, ridx) => (
                        <a 
                          key={ridx}
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-sm text-indigo-600 hover:text-indigo-800 flex items-center"
                        >
                          <ExternalLink size={14} className="mr-1" />
                          <span>{resource.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Implementation Roadmap</h3>
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-indigo-200"></div>
            
            <div className="space-y-0">
              <div className="relative pl-10 pr-4 py-4 hover:bg-gray-50">
                <div className="absolute left-4 w-4 h-4 bg-indigo-600 rounded-full -translate-x-1/2 mt-1"></div>
                <h4 className="font-medium text-gray-800">Phase 1: Assessment & Planning</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Detailed assessment of current capabilities and development of implementation plan
                </p>
              </div>
              <div className="relative pl-10 pr-4 py-4 hover:bg-gray-50">
                <div className="absolute left-4 w-4 h-4 bg-indigo-400 rounded-full -translate-x-1/2 mt-1"></div>
                <h4 className="font-medium text-gray-800">Phase 2: Pilot Implementation</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Implement a limited scope pilot to validate approach and demonstrate value
                </p>
              </div>
              <div className="relative pl-10 pr-4 py-4 hover:bg-gray-50">
                <div className="absolute left-4 w-4 h-4 bg-indigo-300 rounded-full -translate-x-1/2 mt-1"></div>
                <h4 className="font-medium text-gray-800">Phase 3: Full-Scale Deployment</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Enterprise-wide deployment with continuous improvement framework
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <h3 className="text-gray-800 font-medium mb-2">Next Steps</h3>
        <p className="text-gray-600 text-sm">
          To move forward with this proposal, we recommend scheduling a detailed assessment 
          workshop to prioritize use cases and develop a tailored implementation roadmap.
        </p>
      </div>
    </div>
  );
};

export default FinalProposal;