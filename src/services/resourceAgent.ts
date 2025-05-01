import { UseCase, Resource } from '../types/types';
import { resourceLibrary } from '../data/resourceLibrary';

export const simulateResourceAgent = (
  useCases: UseCase[],
  industry: string
): Promise<Resource[]> => {
  return new Promise((resolve) => {
    // Simulate API delay
    setTimeout(() => {
      if (useCases.length === 0) {
        resolve([]);
        return;
      }
      
      let relevantResources: Resource[] = [];
      
      // For each use case, find relevant resources
      useCases.forEach(useCase => {
        const useCaseTitle = useCase.title;
        const keywords = useCase.title.toLowerCase().split(' ');
        
        // Find resources with matching keywords
        const matchingResources = resourceLibrary.filter(resource => 
          keywords.some(keyword => 
            resource.keywords.includes(keyword.toLowerCase())
          )
        );
        
        // Limit to 2 resources per use case
        const topResources = matchingResources.slice(0, 2).map(resource => ({
          ...resource,
          relatedUseCase: useCaseTitle
        }));
        
        relevantResources = [...relevantResources, ...topResources];
      });
      
      // Add some industry-specific resources
      const industryResources = resourceLibrary.filter(resource => 
        resource.industries.some(ind => 
          ind.toLowerCase() === industry.toLowerCase()
        ) &&
        !relevantResources.includes(resource) // Avoid duplicates
      ).slice(0, 3);
      
      relevantResources = [...relevantResources, ...industryResources];
      
      // Add some general resources for AI implementation if needed
      if (relevantResources.length < 5) {
        const generalResources = resourceLibrary.filter(resource => 
          resource.industries.includes('Generic') &&
          !relevantResources.includes(resource) // Avoid duplicates
        ).slice(0, 3);
        
        relevantResources = [...relevantResources, ...generalResources];
      }
      
      resolve(relevantResources);
    }, 2000);
  });
};