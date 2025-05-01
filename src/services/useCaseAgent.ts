import { CompanyResearchData, UseCase } from '../types/types';
import { useCaseLibrary } from '../data/useCaseLibrary';

export const simulateUseCaseAgent = (
  researchData: CompanyResearchData | null
): Promise<UseCase[]> => {
  return new Promise((resolve) => {
    // Simulate API delay
    setTimeout(() => {
      if (!researchData) {
        resolve([]);
        return;
      }
      
      const { industryName, strategicFocus } = researchData;
      
      // Find related use cases from the library
      let relevantUseCases: UseCase[] = [];
      
      // Find industry-specific use cases
      const industryUseCases = useCaseLibrary.filter(
        uc => uc.industries.some(ind => 
          ind.toLowerCase() === industryName.toLowerCase()
        )
      );
      
      if (industryUseCases.length > 0) {
        relevantUseCases = [...industryUseCases];
      }
      
      // Add use cases related to strategic focus areas
      if (strategicFocus && strategicFocus.length > 0) {
        const focusKeywords = strategicFocus.flatMap(focus => 
          focus.toLowerCase().split(' ')
        );
        
        const focusUseCases = useCaseLibrary.filter(uc => 
          !relevantUseCases.includes(uc) && // Don't duplicate
          uc.keywords.some(keyword => 
            focusKeywords.includes(keyword.toLowerCase())
          )
        );
        
        relevantUseCases = [...relevantUseCases, ...focusUseCases];
      }
      
      // If still empty, add some generic high-value use cases
      if (relevantUseCases.length < 3) {
        const genericUseCases = useCaseLibrary.filter(
          uc => uc.industries.includes('Generic')
        );
        relevantUseCases = [...relevantUseCases, ...genericUseCases];
      }
      
      // Limit to top 8 use cases
      const topUseCases = relevantUseCases
        .slice(0, 8)
        .map(uc => ({
          ...uc,
          score: Math.floor(Math.random() * 3) + 8, // Random score between 8-10
        }));
        
      resolve(topUseCases);
    }, 2500);
  });
};