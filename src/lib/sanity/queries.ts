import { sanityClient } from './client';

/**
 * GROQ query for the singleton site settings document
 */
const siteSettingsQuery = `
  *[_type == "siteSettings"][0]{
    churchName,
    theme{
      primaryColor,
      secondaryColor,
      accentColor,
      backgroundColor,
      textColor
    },
    donorbox{
      iframeUrl,
      donateHeading,
      donateBlurb
    }
  }
`;

/**
 * Fetch site settings for layout/theme usage
 */
export async function getSiteSettings() {
  return sanityClient.fetch(siteSettingsQuery);
}
