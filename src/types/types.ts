export interface CompanyResearchData {
  companyName: string;
  industryName: string;
  companyDescription: string;
  keyOfferings: string[];
  strategicFocus: string[];
  industryTrends: string[];
}

export interface UseCase {
  title: string;
  description: string;
  benefits: string[];
  challenges?: string[];
  implementation?: string;
  impact?: string;
  score?: number; // 1-10 for prioritization
}

export interface Resource {
  type: string; // dataset, tool, github, report
  name: string;
  url: string;
  description: string;
  relatedUseCase?: string;
  source?: string; // e.g., "Kaggle", "HuggingFace", "McKinsey"
}