import { UseCase } from '../types/types';

export const useCaseLibrary: UseCase[] = [
  {
    title: 'Predictive Maintenance',
    description: 'Use AI to predict equipment failures before they occur, reducing downtime and maintenance costs.',
    benefits: [
      'Reduce unplanned downtime by up to 50%',
      'Extend equipment lifespan',
      'Optimize maintenance scheduling and resource allocation',
      'Lower overall maintenance costs by 10-40%'
    ],
    industries: ['Manufacturing', 'Energy', 'Transportation', 'Oil & Gas'],
    keywords: ['maintenance', 'equipment', 'downtime', 'efficiency']
  },
  {
    title: 'Customer Sentiment Analysis',
    description: 'Analyze customer feedback across channels to understand sentiment, identify trends, and improve products/services.',
    benefits: [
      'Gain real-time insights into customer satisfaction',
      'Identify emerging issues before they become widespread',
      'Prioritize product improvements based on customer feedback',
      'Improve customer retention through responsive action'
    ],
    industries: ['Retail', 'Finance', 'Healthcare', 'Telecommunications', 'Hospitality', 'Generic'],
    keywords: ['customer', 'sentiment', 'feedback', 'satisfaction']
  },
  {
    title: 'Automated Document Processing',
    description: 'Implement AI-powered document processing to extract, classify, and route information from forms, invoices, and reports.',
    benefits: [
      'Reduce manual data entry by 80-90%',
      'Accelerate document processing time by 60-80%',
      'Improve data accuracy and reduce errors',
      'Free up staff time for higher-value tasks'
    ],
    industries: ['Finance', 'Insurance', 'Healthcare', 'Legal Services', 'Government', 'Generic'],
    keywords: ['document', 'processing', 'automation', 'workflow']
  },
  {
    title: 'Personalized Product Recommendations',
    description: 'Utilize AI algorithms to deliver highly relevant product recommendations based on customer behavior and preferences.',
    benefits: [
      'Increase conversion rates by 20-30%',
      'Boost average order value',
      'Enhance customer satisfaction and loyalty',
      'Improve inventory turnover for recommended items'
    ],
    industries: ['Retail', 'E-commerce', 'Media & Entertainment', 'Hospitality', 'Generic'],
    keywords: ['personalization', 'recommendations', 'customer', 'sales']
  },
  {
    title: 'Fraud Detection and Prevention',
    description: 'Implement machine learning models to identify suspicious patterns and prevent fraudulent transactions in real-time.',
    benefits: [
      'Reduce fraud losses by up to 60%',
      'Decrease false positives by 50%',
      'Enable real-time fraud detection',
      'Adapt to new fraud patterns automatically'
    ],
    industries: ['Finance', 'Banking', 'Insurance', 'Retail', 'E-commerce'],
    keywords: ['fraud', 'security', 'detection', 'risk']
  },
  {
    title: 'AI-Powered Quality Control',
    description: 'Use computer vision and machine learning to automatically detect defects in products during manufacturing.',
    benefits: [
      'Identify defects with 99.5% accuracy',
      'Reduce quality control labor costs',
      'Decrease product returns due to quality issues',
      'Maintain consistent quality standards'
    ],
    industries: ['Manufacturing', 'Automotive', 'Pharmaceutical', 'Food & Beverage'],
    keywords: ['quality', 'defect', 'detection', 'inspection']
  },
  {
    title: 'Intelligent Supply Chain Optimization',
    description: 'Apply AI to forecast demand, optimize inventory levels, and improve logistics planning across the supply chain.',
    benefits: [
      'Reduce inventory holding costs by 15-30%',
      'Decrease stockouts by up to 65%',
      'Optimize transportation routes and costs',
      'Improve overall supply chain resilience'
    ],
    industries: ['Retail', 'Manufacturing', 'Logistics', 'Food & Beverage'],
    keywords: ['supply', 'chain', 'inventory', 'logistics']
  },
  {
    title: 'Predictive Patient Care',
    description: 'Leverage patient data and machine learning to predict health risks and recommend preventive interventions.',
    benefits: [
      'Identify high-risk patients earlier',
      'Reduce hospital readmissions by 25-30%',
      'Lower treatment costs through early intervention',
      'Improve overall patient outcomes'
    ],
    industries: ['Healthcare', 'Pharmaceutical'],
    keywords: ['patient', 'health', 'prediction', 'care']
  },
  {
    title: 'Intelligent Virtual Assistants',
    description: 'Implement AI-powered virtual assistants to handle customer inquiries, provide support, and automate routine tasks.',
    benefits: [
      'Provide 24/7 customer service',
      'Reduce customer service costs by 30-50%',
      'Handle multiple inquiries simultaneously',
      'Continuously improve through learning from interactions'
    ],
    industries: ['Generic', 'Technology', 'Telecommunications', 'Financial Services', 'Retail'],
    keywords: ['chatbot', 'assistant', 'customer', 'service']
  },
  {
    title: 'Dynamic Pricing Optimization',
    description: 'Use AI to analyze market conditions, competitor pricing, and customer behavior to optimize pricing strategies in real-time.',
    benefits: [
      'Increase profit margins by 5-15%',
      'Maximize revenue during high-demand periods',
      'Respond quickly to market changes',
      'Balance inventory levels through strategic pricing'
    ],
    industries: ['Retail', 'E-commerce', 'Hospitality', 'Transportation', 'Energy'],
    keywords: ['pricing', 'optimization', 'revenue', 'market']
  },
  {
    title: 'Predictive HR Analytics',
    description: 'Apply machine learning to workforce data to predict employee turnover, optimize recruitment, and improve talent management.',
    benefits: [
      'Reduce employee turnover by 20-30%',
      'Decrease time-to-hire and recruitment costs',
      'Identify flight risks before resignation',
      'Improve overall employee satisfaction'
    ],
    industries: ['Generic', 'Technology', 'Finance', 'Healthcare', 'Consulting'],
    keywords: ['hr', 'employee', 'turnover', 'recruitment']
  },
  {
    title: 'Generative AI for Content Creation',
    description: 'Utilize generative AI tools to assist in creating marketing content, product descriptions, reports, and other text-based assets.',
    benefits: [
      'Accelerate content production by 5-10x',
      'Maintain consistent brand voice across materials',
      'Scale content operations efficiently',
      'Reduce costs associated with content creation'
    ],
    industries: ['Generic', 'Media & Entertainment', 'Retail', 'Marketing', 'Technology'],
    keywords: ['content', 'generation', 'marketing', 'automation']
  },
  {
    title: 'Anomaly Detection Systems',
    description: 'Implement AI systems that identify unusual patterns or outliers in data to detect operational issues, security threats, or business opportunities.',
    benefits: [
      'Identify issues before they impact operations',
      'Detect security breaches and insider threats',
      'Discover unexpected market opportunities',
      'Improve system reliability and performance'
    ],
    industries: ['Generic', 'Technology', 'Finance', 'Manufacturing', 'Telecommunications'],
    keywords: ['anomaly', 'detection', 'security', 'patterns']
  }
];