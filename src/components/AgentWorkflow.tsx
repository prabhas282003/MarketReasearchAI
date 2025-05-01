import React from 'react';
import { useAgentContext } from '../context/AgentContext';
import { Search, Lightbulb, Database, CheckCircle, Circle, Clock } from 'lucide-react';

const AgentWorkflow: React.FC = () => {
  const { 
    agents, 
    currentAgent,
    isProcessing
  } = useAgentContext();

  const getAgentIcon = (agentType: string) => {
    switch (agentType) {
      case 'research':
        return <Search size={24} />;
      case 'usecase':
        return <Lightbulb size={24} />;
      case 'resource':
        return <Database size={24} />;
      default:
        return <Circle size={24} />;
    }
  };

  const getAgentStatus = (index: number) => {
    if (!isProcessing) return 'idle';
    if (index < agents.findIndex(a => a.id === currentAgent)) return 'completed';
    if (index === agents.findIndex(a => a.id === currentAgent)) return 'active';
    return 'pending';
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle size={20} className="text-green-500" />;
      case 'active':
        return (
          <div className="animate-pulse">
            <Clock size={20} className="text-indigo-600" />
          </div>
        );
      case 'pending':
      case 'idle':
      default:
        return <Circle size={20} className="text-gray-300" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Agent Workflow</h2>
      <div className="space-y-4">
        {agents.map((agent, index) => {
          const status = getAgentStatus(index);
          return (
            <div 
              key={agent.id}
              className={`flex items-center p-3 rounded-lg transition-colors duration-300 ${
                status === 'active' ? 'bg-indigo-50 border border-indigo-200' : ''
              }`}
            >
              <div className={`p-2 rounded-full mr-3 ${
                status === 'active' 
                  ? 'bg-indigo-100 text-indigo-600 animate-pulse' 
                  : status === 'completed'
                    ? 'bg-green-100 text-green-600'
                    : 'bg-gray-100 text-gray-400'
              }`}>
                {getAgentIcon(agent.id)}
              </div>
              <div className="flex-grow">
                <h3 className={`font-medium ${
                  status === 'active' ? 'text-indigo-700' : 
                  status === 'completed' ? 'text-green-700' : 'text-gray-600'
                }`}>
                  {agent.name}
                </h3>
                <p className="text-sm text-gray-500">{agent.description}</p>
              </div>
              <div className="ml-2">
                {getStatusIcon(status)}
              </div>
            </div>
          );
        })}
      </div>
      {isProcessing && (
        <div className="mt-4 text-center">
          <div className="inline-block">
            <svg className="animate-spin h-5 w-5 text-indigo-600 inline mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span className="text-sm text-gray-600">Agents are working...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgentWorkflow;