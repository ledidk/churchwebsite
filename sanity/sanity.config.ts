import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'Église de Gatineau',

  // ✅ THIS is the Sanity project identifier
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
