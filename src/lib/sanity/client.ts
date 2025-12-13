import { createClient } from '@sanity/client';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || '';
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';
const apiVersion = import.meta.env.PUBLIC_SANITY_API_VERSION || '2024-01-01';
const useCdn = import.meta.env.PUBLIC_SANITY_USE_CDN !== 'false';

if (!projectId) {
  console.warn('SANITY: Missing PUBLIC_SANITY_PROJECT_ID environment variable');
}

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  perspective: 'published',
});

export default sanityClient;
