import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-01-01', // Use the latest API version
  token: process.env.SANITY_TOKEN, // Add the API token here
  useCdn: false, // Disable CDN for write operations
});

export default client;
