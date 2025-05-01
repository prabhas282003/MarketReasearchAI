import React from 'react';
import { useAgentContext } from '../../context/AgentContext';
import { Building2, BarChart3, Globe, Users } from 'lucide-react';

const CompanyInfo: React.FC = () => {
  const { researchData, company, industry, isAgentComplete } = useAgentContext();

  if (!researchData && !isAgentComplete('research')) {
    return (
      <div className="py-8 text-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="rounded-full bg-gray-200 h-12 w-12 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
        <p className="mt-4 text-gray-500">Researching company information...</p>
      </div>
    );
  }

  if (!researchData) {
    return (
      <div className="py-8 text-center">
        <p className="text-gray-500">No company information available yet.</p>
      </div>
    );
  }

  const { companyDescription, keyOfferings, strategicFocus, industryTrends } = researchData;

  return (
    <div className="space-y-6">
      <div className="flex items-start">
        <div className="bg-indigo-100 p-3 rounded-lg text-indigo-600 mr-4">
          <Building2 size={24} />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">{company || 'Company'}</h2>
          <p className="text-gray-500">{industry || 'Industry'}</p>
          <p className="mt-2 text-gray-700">{companyDescription}</p>
        </div>
      </div>

      {keyOfferings && keyOfferings.length > 0 && (
        <div className="mt-6">
          <div className="flex items-center mb-3">
            <Globe size={20} className="text-indigo-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-800">Key Offerings</h3>
          </div>
          <ul className="list-disc list-inside space-y-2 ml-2 text-gray-700">
            {keyOfferings.map((offering, index) => (
              <li key={index}>{offering}</li>
            ))}
          </ul>
        </div>
      )}

      {strategicFocus && strategicFocus.length > 0 && (
        <div className="mt-6">
          <div className="flex items-center mb-3">
            <BarChart3 size={20} className="text-indigo-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-800">Strategic Focus Areas</h3>
          </div>
          <ul className="list-disc list-inside space-y-2 ml-2 text-gray-700">
            {strategicFocus.map((focus, index) => (
              <li key={index}>{focus}</li>
            ))}
          </ul>
        </div>
      )}

      {industryTrends && industryTrends.length > 0 && (
        <div className="mt-6">
          <div className="flex items-center mb-3">
            <Users size={20} className="text-indigo-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-800">Industry Trends</h3>
          </div>
          <ul className="list-disc list-inside space-y-2 ml-2 text-gray-700">
            {industryTrends.map((trend, index) => (
              <li key={index}>{trend}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CompanyInfo;