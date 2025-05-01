import { Resource } from '../types/types';

export const resourceLibrary: Resource[] = [
  {
    type: 'Dataset',
    name: 'Predictive Maintenance Dataset',
    url: 'https://www.kaggle.com/datasets/shivamb/machine-predictive-maintenance-classification',
    description: 'Synthetic dataset for machine predictive maintenance with features like temperature, pressure, and failure labels.',
    keywords: ['maintenance', 'prediction', 'manufacturing', 'failure'],
    industries: ['Manufacturing', 'Energy'],
    source: 'Kaggle'
  },
  {
    type: 'Dataset',
    name: 'Customer Review Sentiment Dataset',
    url: 'https://huggingface.co/datasets/amazon_reviews_multi',
    description: 'Multi-language dataset of Amazon customer reviews for sentiment analysis and opinion mining.',
    keywords: ['sentiment', 'customer', 'reviews', 'feedback'],
    industries: ['Retail', 'E-commerce'],
    source: 'HuggingFace'
  },
  {
    type: 'Dataset',
    name: 'Medical Images for Diagnosis',
    url: 'https://www.kaggle.com/datasets/andrewmvd/medical-mnist',
    description: 'Collection of medical images across various categories for training diagnostic AI models.',
    keywords: ['medical', 'images', 'diagnosis', 'healthcare'],
    industries: ['Healthcare'],
    source: 'Kaggle'
  },
  {
    type: 'Dataset',
    name: 'Financial Transaction Fraud Detection',
    url: 'https://www.kaggle.com/datasets/mlg-ulb/creditcardfraud',
    description: 'Credit card transactions dataset with labels for fraudulent activities.',
    keywords: ['fraud', 'finance', 'transactions', 'detection'],
    industries: ['Finance', 'Banking'],
    source: 'Kaggle'
  },
  {
    type: 'Tool',
    name: 'Hugging Face Transformers',
    url: 'https://huggingface.co/docs/transformers/index',
    description: 'Library with pre-trained models for various NLP tasks including sentiment analysis and text generation.',
    keywords: ['nlp', 'sentiment', 'text', 'generation'],
    industries: ['Generic'],
    source: 'Hugging Face'
  },
  {
    type: 'Tool',
    name: 'TensorFlow Decision Forests',
    url: 'https://www.tensorflow.org/decision_forests',
    description: 'Collection of state-of-the-art algorithms for decision forest models in TensorFlow.',
    keywords: ['prediction', 'classification', 'decision', 'forests'],
    industries: ['Generic'],
    source: 'TensorFlow'
  },
  {
    type: 'Tool',
    name: 'PyTorch Image Models',
    url: 'https://github.com/rwightman/pytorch-image-models',
    description: 'Collection of image models, scripts, pretrained weights, etc. for computer vision.',
    keywords: ['vision', 'images', 'detection', 'quality'],
    industries: ['Generic', 'Manufacturing'],
    source: 'GitHub'
  },
  {
    type: 'GitHub',
    name: 'Generative AI with LangChain',
    url: 'https://github.com/hwchase17/langchain',
    description: 'Framework for developing applications powered by language models with modules for document processing and agent capabilities.',
    keywords: ['content', 'generation', 'langchain', 'document'],
    industries: ['Generic', 'Technology'],
    source: 'GitHub'
  },
  {
    type: 'GitHub',
    name: 'Time Series Forecasting Library',
    url: 'https://github.com/unit8co/darts',
    description: 'Python library for easy manipulation and forecasting of time series, useful for demand prediction.',
    keywords: ['time', 'series', 'forecast', 'prediction'],
    industries: ['Retail', 'Manufacturing', 'Energy'],
    source: 'GitHub'
  },
  {
    type: 'GitHub',
    name: 'Anomaly Detection Toolkit',
    url: 'https://github.com/numenta/nab',
    description: 'Numenta Anomaly Benchmark - A framework for evaluating algorithms for anomaly detection in streaming data.',
    keywords: ['anomaly', 'detection', 'streaming', 'patterns'],
    industries: ['Technology', 'Manufacturing', 'Energy'],
    source: 'GitHub'
  },
  {
    type: 'Report',
    name: 'McKinsey: The State of AI in 2023',
    url: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-in-2023-generative-ais-breakout-year',
    description: 'Comprehensive report on the adoption and impact of AI across various industries.',
    keywords: ['trends', 'adoption', 'impact', 'industry'],
    industries: ['Generic'],
    source: 'McKinsey'
  },
  {
    type: 'Report',
    name: 'Deloitte: AI-Fueled Organizations',
    url: 'https://www2.deloitte.com/us/en/insights/focus/tech-trends/2021/ai-transformation.html',
    description: 'Insights on how organizations are using AI to transform operations and strategy.',
    keywords: ['transformation', 'organization', 'strategy', 'implementation'],
    industries: ['Generic'],
    source: 'Deloitte'
  },
  {
    type: 'Report',
    name: 'Gartner: Top Strategic Technology Trends',
    url: 'https://www.gartner.com/en/information-technology/insights/top-technology-trends',
    description: 'Analysis of the most impactful technology trends including AI applications.',
    keywords: ['trends', 'strategy', 'technology', 'future'],
    industries: ['Generic', 'Technology'],
    source: 'Gartner'
  },
  {
    type: 'Tool',
    name: 'OpenAI API for Content Generation',
    url: 'https://openai.com/api/',
    description: 'API access to powerful language models for content generation and enhancement.',
    keywords: ['content', 'generation', 'gpt', 'language'],
    industries: ['Generic', 'Media', 'Technology'],
    source: 'OpenAI'
  }
];