import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { simulateResearchAgent } from '../services/researchAgent';
import { simulateUseCaseAgent } from '../services/useCaseAgent';
import { simulateResourceAgent } from '../services/resourceAgent';
import { CompanyResearchData, UseCase, Resource } from '../types/types';
import { agents as agentList } from '../data/agents';

interface AgentContextProps {
  company: string;
  industry: string;
  agents: Array<{
    id: string;
    name: string;
    description: string;
  }>;
  currentAgent: string;
  isProcessing: boolean;
  isComplete: boolean;
  researchData: CompanyResearchData | null;
  useCaseData: UseCase[];
  resourceData: Resource[];
  startAgentWorkflow: (company: string, industry: string) => void;
  isAgentComplete: (agentId: string) => boolean;
}

const AgentContext = createContext<AgentContextProps | undefined>(undefined);

export const AgentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [company, setCompany] = useState('');
  const [industry, setIndustry] = useState('');
  const [currentAgent, setCurrentAgent] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [completedAgents, setCompletedAgents] = useState<string[]>([]);
  
  // Data states
  const [researchData, setResearchData] = useState<CompanyResearchData | null>(null);
  const [useCaseData, setUseCaseData] = useState<UseCase[]>([]);
  const [resourceData, setResourceData] = useState<Resource[]>([]);

  const agents = agentList;

  const isAgentComplete = (agentId: string): boolean => {
    return completedAgents.includes(agentId);
  };

  const startAgentWorkflow = async (companyName: string, industryName: string) => {
    // Reset states
    setCompany(companyName);
    setIndustry(industryName);
    setCurrentAgent('research');
    setIsProcessing(true);
    setIsComplete(false);
    setCompletedAgents([]);
    setResearchData(null);
    setUseCaseData([]);
    setResourceData([]);

    // Research Agent
    setCurrentAgent('research');
    const research = await simulateResearchAgent(companyName, industryName);
    setResearchData(research);
    setCompletedAgents(prev => [...prev, 'research']);

    // Use Case Agent
    setCurrentAgent('usecase');
    const useCases = await simulateUseCaseAgent(research);
    setUseCaseData(useCases);
    setCompletedAgents(prev => [...prev, 'usecase']);

    // Resource Agent
    setCurrentAgent('resource');
    const resources = await simulateResourceAgent(useCases, research?.industryName || industryName);
    setResourceData(resources);
    setCompletedAgents(prev => [...prev, 'resource']);

    // Complete
    setCurrentAgent('');
    setIsProcessing(false);
    setIsComplete(true);
  };

  const value = {
    company,
    industry,
    agents,
    currentAgent,
    isProcessing,
    isComplete,
    researchData,
    useCaseData,
    resourceData,
    startAgentWorkflow,
    isAgentComplete
  };

  return (
    <AgentContext.Provider value={value}>
      {children}
    </AgentContext.Provider>
  );
};

export const useAgentContext = (): AgentContextProps => {
  const context = useContext(AgentContext);
  if (context === undefined) {
    throw new Error('useAgentContext must be used within an AgentProvider');
  }
  return context;
};