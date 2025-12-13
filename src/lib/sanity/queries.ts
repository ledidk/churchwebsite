import groq from 'groq';

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    _id,
    _type,
    churchName,
    "logo": logo.asset->url,
    navLinks[] {
      _key,
      label,
      href,
      order,
      enabled
    },
    footerText,
    socialLinks[] {
      _key,
      label,
      url,
      icon
    },
    contactInfo,
    theme,
    donorbox
  }
`;

export const pageBySlugQuery = groq`
  *[_type == "page" && slug == $slug][0] {
    _id,
    _type,
    title,
    slug,
    sections[] {
      _type,
      _key,
      headline,
      subtext,
      "backgroundImage": backgroundImage.asset->url,
      ctaLabel,
      ctaUrl,
      content,
      heading,
      text,
      subheading,
      limit,
      showMap
    },
    seo
  }
`;

export const allPagesQuery = groq`
  *[_type == "page"] {
    _id,
    title,
    slug
  }
`;

export const eventsQuery = groq`
  *[_type == "event"] | order(startDateTime asc) {
    _id,
    _type,
    title,
    description,
    startDateTime,
    endDateTime,
    location,
    "image": image.asset->url,
    eventType,
    cost,
    registrationInfo,
    order
  }
`;

export const upcomingEventsQuery = groq`
  *[_type == "event" && eventType == "upcoming" && startDateTime > now()] | order(startDateTime asc) {
    _id,
    _type,
    title,
    description,
    startDateTime,
    endDateTime,
    location,
    "image": image.asset->url,
    eventType,
    cost,
    registrationInfo,
    order
  }
`;

export const servicesQuery = groq`
  *[_type == "service"] | order(order asc) {
    _id,
    _type,
    title,
    description,
    dayTime,
    order
  }
`;

export const ministriesQuery = groq`
  *[_type == "ministry"] | order(order asc) {
    _id,
    _type,
    title,
    description,
    "image": image.asset->url,
    order
  }
`;

export const teamMembersQuery = groq`
  *[_type == "teamMember"] | order(order asc) {
    _id,
    _type,
    name,
    role,
    bio,
    "photo": photo.asset->url,
    order
  }
`;
