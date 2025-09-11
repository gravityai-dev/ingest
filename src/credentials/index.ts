/**
 * Credential definitions for ingest package
 * Following the package specification pattern
 */

// SearchAPI Credential for web search
export const SearchAPICredential = {
  name: "searchapiCredential",
  displayName: "SearchAPI",
  description: "SearchAPI.io credentials for web search functionality",
  properties: [
    {
      name: "apiKey",
      displayName: "API Key",
      type: "string" as const,
      required: true,
      secret: true,
      description: "Your SearchAPI.io API key",
      placeholder: "Enter your SearchAPI.io API key"
    }
  ],
};

// Apify Credential for web scraping
export const ApifyCredential = {
  name: "apifyCredential",
  displayName: "Apify",
  description: "Apify API credentials for web scraping",
  properties: [
    {
      name: "token",
      displayName: "API Token",
      type: "string" as const,
      required: true,
      secret: true,
      description: "Your Apify API token",
      placeholder: "Enter your Apify API token"
    }
  ],
};

// Hyperbrowser Credential for web scraping
export const HyperbrowserCredential = {
  name: "hyperbrowserCredential",
  displayName: "Hyperbrowser",
  description: "Hyperbrowser API credentials for web scraping",
  properties: [
    {
      name: "apiKey",
      displayName: "API Key",
      type: "string" as const,
      required: true,
      secret: true,
      description: "Your Hyperbrowser API key",
      placeholder: "Enter your Hyperbrowser API key"
    }
  ],
};

// Google API Credential for Google Sheets
export const GoogleAPICredential = {
  name: "googleApiCredential",
  displayName: "Google API",
  description: "Google API credentials for accessing Google services",
  properties: [
    {
      name: "apiKey",
      displayName: "API Key",
      type: "string" as const,
      required: true,
      secret: true,
      description: "Your Google API key with Sheets API enabled",
      placeholder: "Enter your Google API key"
    }
  ],
};
