#!/usr/bin/env node

/**
 * Content Migration Script for Église de Gatineau
 * 
 * This script migrates existing content from the Astro pages into Sanity CMS.
 * 
 * Usage:
 * 1. Set SANITY_WRITE_TOKEN environment variable
 * 2. Run: node scripts/seed-sanity.mjs
 * 
 * Note: This requires a write token which should NEVER be committed to git.
 */

import { createClient } from '@sanity/client';

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_STUDIO_PROJECT_ID;
const dataset = process.env.PUBLIC_SANITY_DATASET || process.env.SANITY_STUDIO_DATASET || 'production';
const token = process.env.SANITY_WRITE_TOKEN;

if (!projectId || !dataset) {
  console.error('❌ Missing SANITY_PROJECT_ID or SANITY_DATASET environment variables');
  process.exit(1);
}

if (!token) {
  console.error('❌ Missing SANITY_WRITE_TOKEN environment variable');
  console.error('   Get a write token from: https://sanity.io/manage');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
});

console.log('🚀 Starting content migration...\n');

// Site Settings
const siteSettings = {
  _id: 'siteSettings',
  _type: 'siteSettings',
  churchName: {
    fr: 'Église de Gatineau',
    en: 'Gatineau Church'
  },
  navLinks: [
    {
      _key: 'home',
      label: { fr: 'Accueil', en: 'Home' },
      href: '/',
      order: 1,
      enabled: true
    },
    {
      _key: 'about',
      label: { fr: 'À Propos', en: 'About' },
      href: '/about',
      order: 2,
      enabled: true
    },
    {
      _key: 'services',
      label: { fr: 'Services', en: 'Services' },
      href: '/services',
      order: 3,
      enabled: true
    },
    {
      _key: 'events',
      label: { fr: 'Événements', en: 'Events' },
      href: '/events',
      order: 4,
      enabled: true
    },
    {
      _key: 'ministries',
      label: { fr: 'Ministères', en: 'Ministries' },
      href: '/ministries',
      order: 5,
      enabled: true
    },
    {
      _key: 'contact',
      label: { fr: 'Contact', en: 'Contact' },
      href: '/contact',
      order: 6,
      enabled: true
    },
    {
      _key: 'donate',
      label: { fr: 'Faire un Don', en: 'Donate' },
      href: '/donate',
      order: 7,
      enabled: true
    }
  ],
  footerText: {
    fr: 'Construit avec amour pour la communauté de Gatineau',
    en: 'Built with love for the Gatineau community'
  },
  socialLinks: [
    {
      _key: 'facebook',
      label: 'Facebook',
      url: 'https://facebook.com',
      icon: 'facebook'
    },
    {
      _key: 'instagram',
      label: 'Instagram',
      url: 'https://instagram.com',
      icon: 'instagram'
    },
    {
      _key: 'youtube',
      label: 'YouTube',
      url: 'https://youtube.com',
      icon: 'youtube'
    }
  ],
  contactInfo: {
    address: {
      fr: '123 Rue Principale, Gatineau, QC J8X 1A1',
      en: '123 Main Street, Gatineau, QC J8X 1A1'
    },
    phone: '(819) 555-0123',
    email: 'info@eglisegatineau.ca'
  },
  theme: {
    primaryColor: '#1e3a8a',
    secondaryColor: '#3b82f6',
    accentColor: '#f59e0b',
    backgroundColor: '#f8fafc',
    textColor: '#334155'
  },
  donorbox: {
    iframeUrl: 'https://donorbox.org/embed/your-campaign',
    donateHeading: {
      fr: 'Faire un Don',
      en: 'Make a Donation'
    }
  }
};

// Services
const services = [
  {
    _type: 'service',
    title: {
      fr: 'Service Dominical',
      en: 'Sunday Service'
    },
    description: {
      fr: [
        {
          _type: 'block',
          children: [{ _type: 'span', text: 'Culte traditionnel avec musique, prédication et communion. Un moment de louange et de célébration pour toute la famille.' }]
        }
      ],
      en: [
        {
          _type: 'block',
          children: [{ _type: 'span', text: 'Traditional worship with music, preaching, and communion. A time of praise and celebration for the whole family.' }]
        }
      ]
    },
    dayTime: 'Dimanche 9h00 & 11h00 / Sunday 9:00 AM & 11:00 AM',
    order: 1
  },
  {
    _type: 'service',
    title: {
      fr: 'Service du Soir',
      en: 'Evening Service'
    },
    description: {
      fr: [
        {
          _type: 'block',
          children: [{ _type: 'span', text: 'Service plus intime avec temps de prière, témoignages et étude biblique approfondie.' }]
        }
      ],
      en: [
        {
          _type: 'block',
          children: [{ _type: 'span', text: 'More intimate service with prayer time, testimonies, and in-depth Bible study.' }]
        }
      ]
    },
    dayTime: 'Dimanche 18h00 / Sunday 6:00 PM',
    order: 2
  },
  {
    _type: 'service',
    title: {
      fr: 'Réunion de Prière',
      en: 'Prayer Meeting'
    },
    description: {
      fr: [
        {
          _type: 'block',
          children: [{ _type: 'span', text: 'Temps de prière communautaire pour les besoins de l\'église et de la communauté.' }]
        }
      ],
      en: [
        {
          _type: 'block',
          children: [{ _type: 'span', text: 'Community prayer time for church and community needs.' }]
        }
      ]
    },
    dayTime: 'Mercredi 19h00 / Wednesday 7:00 PM',
    order: 3
  }
];

// Ministries
const ministries = [
  {
    _type: 'ministry',
    title: {
      fr: 'Ministère Jeunesse',
      en: 'Youth Ministry'
    },
    description: {
      fr: [
        {
          _type: 'block',
          children: [{ _type: 'span', text: 'Activités, camps et programmes spéciaux pour les jeunes de 12 à 18 ans. Nous encourageons la croissance spirituelle dans un environnement amusant et sûr.' }]
        }
      ],
      en: [
        {
          _type: 'block',
          children: [{ _type: 'span', text: 'Activities, camps, and special programs for youth aged 12-18. We encourage spiritual growth in a fun and safe environment.' }]
        }
      ]
    },
    order: 1
  },
  {
    _type: 'ministry',
    title: {
      fr: 'École du Dimanche',
      en: 'Sunday School'
    },
    description: {
      fr: [
        {
          _type: 'block',
          children: [{ _type: 'span', text: 'Programmes éducatifs pour les enfants de tous âges, avec des enseignements adaptés à leur niveau de compréhension.' }]
        }
      ],
      en: [
        {
          _type: 'block',
          children: [{ _type: 'span', text: 'Educational programs for children of all ages, with age-appropriate teachings and activities.' }]
        }
      ]
    },
    order: 2
  },
  {
    _type: 'ministry',
    title: {
      fr: 'Ministère Familial',
      en: 'Family Ministry'
    },
    description: {
      fr: [
        {
          _type: 'block',
          children: [{ _type: 'span', text: 'Support et counseling pour les familles, avec des programmes de mariage, de parentalité et de gestion des conflits.' }]
        }
      ],
      en: [
        {
          _type: 'block',
          children: [{ _type: 'span', text: 'Support and counseling for families, with marriage, parenting, and conflict resolution programs.' }]
        }
      ]
    },
    order: 3
  },
  {
    _type: 'ministry',
    title: {
      fr: 'Aide Communautaire',
      en: 'Community Outreach'
    },
    description: {
      fr: [
        {
          _type: 'block',
          children: [{ _type: 'span', text: 'Programmes d\'aide alimentaire, de support aux personnes âgées et d\'assistance aux familles dans le besoin.' }]
        }
      ],
      en: [
        {
          _type: 'block',
          children: [{ _type: 'span', text: 'Food assistance programs, senior support, and aid to families in need.' }]
        }
      ]
    },
    order: 4
  }
];

// Team Members
const teamMembers = [
  {
    _type: 'teamMember',
    name: 'Pasteur Jean Dubois',
    role: {
      fr: 'Pasteur Principal',
      en: 'Senior Pastor'
    },
    bio: {
      fr: [
        {
          _type: 'block',
          children: [{ _type: 'span', text: 'Avec plus de 20 ans d\'expérience ministérielle, le Pasteur Dubois guide notre communauté avec sagesse et compassion. Il est marié à Marie et père de trois enfants.' }]
        }
      ],
      en: [
        {
          _type: 'block',
          children: [{ _type: 'span', text: 'With over 20 years of ministerial experience, Pastor Dubois guides our community with wisdom and compassion. He is married to Marie and father of three children.' }]
        }
      ]
    },
    order: 1
  },
  {
    _type: 'teamMember',
    name: 'Pasteur Marie Tremblay',
    role: {
      fr: 'Pasteur Associé',
      en: 'Associate Pastor'
    },
    bio: {
      fr: [
        {
          _type: 'block',
          children: [{ _type: 'span', text: 'Spécialisée dans les ministères familiaux et l\'accompagnement pastoral, le Pasteur Tremblay apporte une approche chaleureuse et bienveillante à notre équipe.' }]
        }
      ],
      en: [
        {
          _type: 'block',
          children: [{ _type: 'span', text: 'Specialized in family ministries and pastoral counseling, Pastor Tremblay brings a warm and caring approach to our team.' }]
        }
      ]
    },
    order: 2
  }
];

// Sample Events
const events = [
  {
    _type: 'event',
    title: {
      fr: 'Service de la Veille de Noël',
      en: 'Christmas Eve Service'
    },
    description: {
      fr: [
        {
          _type: 'block',
          children: [{ _type: 'span', text: 'Célébration spéciale de la naissance de Jésus avec cantiques de Noël, lecture de la nativité et temps de communion familiale.' }]
        }
      ],
      en: [
        {
          _type: 'block',
          children: [{ _type: 'span', text: 'Special celebration of the birth of Jesus with Christmas carols, nativity reading, and family communion time.' }]
        }
      ]
    },
    startDateTime: '2024-12-24T19:00:00Z',
    endDateTime: '2024-12-24T20:30:00Z',
    location: {
      fr: 'Sanctuaire principal',
      en: 'Main Sanctuary'
    },
    eventType: 'upcoming',
    order: 1
  }
];

async function seedContent() {
  try {
    // Create or update site settings
    console.log('📝 Creating site settings...');
    await client.createOrReplace(siteSettings);
    console.log('✅ Site settings created\n');

    // Create services
    console.log('📝 Creating services...');
    for (const service of services) {
      await client.create(service);
    }
    console.log(`✅ Created ${services.length} services\n`);

    // Create ministries
    console.log('📝 Creating ministries...');
    for (const ministry of ministries) {
      await client.create(ministry);
    }
    console.log(`✅ Created ${ministries.length} ministries\n`);

    // Create team members
    console.log('📝 Creating team members...');
    for (const member of teamMembers) {
      await client.create(member);
    }
    console.log(`✅ Created ${teamMembers.length} team members\n`);

    // Create events
    console.log('📝 Creating events...');
    for (const event of events) {
      await client.create(event);
    }
    console.log(`✅ Created ${events.length} events\n`);

    console.log('🎉 Content migration completed successfully!');
    console.log('\n📌 Next steps:');
    console.log('   1. Visit your Sanity Studio to review the content');
    console.log('   2. Create page documents for home, about, contact, etc.');
    console.log('   3. Add more events, services, and ministries as needed');
    console.log('   4. Upload logo and images through Sanity Studio');
    
  } catch (error) {
    console.error('❌ Error during migration:', error);
    process.exit(1);
  }
}

seedContent();
