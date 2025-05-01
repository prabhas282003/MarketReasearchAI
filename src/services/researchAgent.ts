import axios from 'axios';
import * as cheerio from 'cheerio';
import { CompanyResearchData } from '../types/types';

const SERP_API_KEY = 'YOUR_SERP_API_KEY'; // We'll need to get this from environment variables
const NEWS_API_KEY = 'YOUR_NEWS_API_KEY';  // We'll need to get this from environment variables

async function searchCompanyInfo(companyName: string): Promise<any> {
  try {
    // Search for company information using SERP API
    const response = await axios.get(`https://serpapi.com/search.json`, {
      params: {
        q: `${companyName} company industry sector`,
        api_key: SERP_API_KEY
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error searching company info:', error);
    return null;
  }
}

async function getCompanyWebsite(companyName: string): Promise<string | null> {
  try {
    const response = await axios.get(`https://serpapi.com/search.json`, {
      params: {
        q: `${companyName} official website`,
        api_key: SERP_API_KEY
      }
    });

    // Extract the first organic result URL
    return response.data.organic_results[0]?.link || null;
  } catch (error) {
    console.error('Error getting company website:', error);
    return null;
  }
}

async function scrapeWebsite(url: string): Promise<any> {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    
    // Extract relevant information from the website
    const description = $('meta[name="description"]').attr('content') || '';
    const keywords = $('meta[name="keywords"]').attr('content') || '';
    
    // Look for common sections that might contain product information
    const products = $('*:contains("Products"), *:contains("Solutions")').text();
    
    return {
      description,
      keywords,
      products
    };
  } catch (error) {
    console.error('Error scraping website:', error);
    return null;
  }
}

async function getNewsArticles(companyName: string): Promise<any[]> {
  try {
    const response = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: companyName,
        sortBy: 'relevancy',
        language: 'en',
        apiKey: NEWS_API_KEY
      }
    });

    return response.data.articles || [];
  } catch (error) {
    console.error('Error getting news articles:', error);
    return [];
  }
}

export const researchAgent = async (companyName: string): Promise<CompanyResearchData> => {
  try {
    // 1. Search for company information
    const searchResults = await searchCompanyInfo(companyName);
    
    // 2. Get company website
    const websiteUrl = await getCompanyWebsite(companyName);
    
    // 3. Scrape website if available
    const websiteData = websiteUrl ? await scrapeWebsite(websiteUrl) : null;
    
    // 4. Get recent news articles
    const newsArticles = await getNewsArticles(companyName);
    
    // Extract industry from search results or website data
    const industryName = extractIndustry(searchResults, websiteData);
    
    // Extract key offerings from website data and news
    const keyOfferings = extractKeyOfferings(websiteData, newsArticles);
    
    // Analyze trends from news articles
    const trends = analyzeTrends(newsArticles);
    
    // Compile strategic focus areas
    const strategicFocus = extractStrategicFocus(websiteData, newsArticles);

    return {
      companyName,
      industryName,
      companyDescription: websiteData?.description || `${companyName} is a leading organization in the ${industryName} industry.`,
      keyOfferings,
      strategicFocus,
      industryTrends: trends
    };
  } catch (error) {
    console.error('Error in research agent:', error);
    
    // Fallback to basic information if web research fails
    return {
      companyName,
      industryName: 'Unknown',
      companyDescription: `${companyName}`,
      keyOfferings: [],
      strategicFocus: [],
      industryTrends: []
    };
  }
};

// Helper functions for extracting and analyzing data
function extractIndustry(searchResults: any, websiteData: any): string {
  // Implement logic to extract industry from search results and website data
  // This would involve analyzing text content and identifying industry-related keywords
  return 'Technology'; // Placeholder - implement actual logic
}

function extractKeyOfferings(websiteData: any, newsArticles: any[]): string[] {
  // Implement logic to extract key offerings from website data and news articles
  return ['Digital Solutions', 'Cloud Services']; // Placeholder - implement actual logic
}

function analyzeTrends(newsArticles: any[]): string[] {
  // Implement logic to analyze trends from news articles
  return ['Digital Transformation', 'AI Adoption']; // Placeholder - implement actual logic
}

function extractStrategicFocus(websiteData: any, newsArticles: any[]): string[] {
  // Implement logic to extract strategic focus areas
  return ['Innovation', 'Customer Experience']; // Placeholder - implement actual logic
}