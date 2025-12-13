import { localizedString, localizedText } from './languageHelper';

export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    localizedString('churchName', 'Church Name', 'The name of the church'),
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'navLinks',
      title: 'Navigation Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            localizedString('label', 'Label'),
            {
              name: 'href',
              title: 'URL/Path',
              type: 'string',
              validation: (Rule: any) => Rule.required()
            },
            {
              name: 'order',
              title: 'Order',
              type: 'number',
              validation: (Rule: any) => Rule.required()
            },
            {
              name: 'enabled',
              title: 'Enabled',
              type: 'boolean',
              initialValue: true
            }
          ]
        }
      ]
    },
    localizedText('footerText', 'Footer Text'),
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule: any) => Rule.required()
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule: any) => Rule.required()
            },
            {
              name: 'icon',
              title: 'Icon Name',
              type: 'string',
              description: 'e.g., facebook, instagram, youtube'
            }
          ]
        }
      ]
    },
    {
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        localizedString('address', 'Address'),
        {
          name: 'phone',
          title: 'Phone',
          type: 'string'
        },
        {
          name: 'email',
          title: 'Email',
          type: 'string'
        }
      ]
    },
    {
      name: 'theme',
      title: 'Theme Colors',
      type: 'object',
      fields: [
        {
          name: 'primaryColor',
          title: 'Primary Color',
          type: 'string',
          description: 'Hex color code (e.g., #1e3a8a)'
        },
        {
          name: 'secondaryColor',
          title: 'Secondary Color',
          type: 'string',
          description: 'Hex color code'
        },
        {
          name: 'accentColor',
          title: 'Accent Color',
          type: 'string',
          description: 'Hex color code (e.g., #f59e0b)'
        },
        {
          name: 'backgroundColor',
          title: 'Background Color',
          type: 'string',
          description: 'Hex color code'
        },
        {
          name: 'textColor',
          title: 'Text Color',
          type: 'string',
          description: 'Hex color code'
        }
      ]
    },
    {
      name: 'donorbox',
      title: 'Donorbox Configuration',
      type: 'object',
      fields: [
        {
          name: 'iframeUrl',
          title: 'Donorbox Iframe URL',
          type: 'url',
          description: 'The full iframe URL from Donorbox'
        },
        {
          name: 'campaignId',
          title: 'Campaign ID',
          type: 'string',
          description: 'Alternative: just the campaign ID'
        },
        localizedString('donateHeading', 'Donation Page Heading'),
        localizedText('donateBlurb', 'Donation Page Description')
      ]
    }
  ]
};
