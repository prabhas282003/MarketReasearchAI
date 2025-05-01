import React from 'react';
import { useAgentContext } from '../../context/AgentContext';
import { Database, ExternalLink, FileText, Github, Layout } from 'lucide-react';

const ResourceResults: React.FC = () => {
  const { resourceData, isAgentComplete } = useAgentContext();

  if (resourceData.length === 0 && !isAgentComplete('resource')) {
    return (
      <div className="py-8 text-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="rounded-full bg-gray-200 h-12 w-12 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
        <p className="mt-4 text-gray-500">Collecting resources and datasets...</p>
      </div>
    );
  }

  if (resourceData.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-gray-500">No resources available yet.</p>
      </div>
    );
  }

  const getResourceIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'dataset':
        return <Database size={18} className="text-indigo-600" />;
      case 'github':
        return <Github size={18} className="text-gray-700" />;
      case 'report':
        return <FileText size={18} className="text-amber-600" />;
      case 'tool':
        return <Layout size={18} className="text-emerald-600" />;
      default:
        return <ExternalLink size={18} className="text-gray-600" />;
    }
  };

  // Group resources by category
  const groupedResources: Record<string, typeof resourceData> = {};
  resourceData.forEach(resource => {
    if (!groupedResources[resource.type]) {
      groupedResources[resource.type] = [];
    }
    groupedResources[resource.type].push(resource);
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center mb-4">
        <Database size={24} className="text-indigo-600 mr-2" />
        <h2 className="text-xl font-bold text-gray-800">Resources & Datasets</h2>
      </div>
      
      {Object.entries(groupedResources).map(([type, resources]) => (
        <div key={type} className="mb-6">
          <h3 className="text-md font-semibold text-gray-700 mb-3 flex items-center">
            {getResourceIcon(type)}
            <span className="ml-2">{type.charAt(0).toUpperCase() + type.slice(1)}s</span>
          </h3>
          
          <div className="space-y-3">
            {resources.map((resource, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex justify-between">
                  <h4 className="font-medium text-gray-800">{resource.name}</h4>
                  <a 
                    href={resource.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 text-sm flex items-center"
                  >
                    <span>View</span>
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
                <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                {resource.relatedUseCase && (
                  <div className="mt-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                      Related: {resource.relatedUseCase}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResourceResults;