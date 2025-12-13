import { localizedString, localizedText } from './languageHelper';

export default {
  name: 'page',
  title: 'Pages',
  type: 'document',
  fields: [
    localizedString('title', 'Page Title'),
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly identifier (e.g., "about", "contact")',
      validation: (Rule: any) => Rule.required(),
      options: {
        source: 'title.fr',
        maxLength: 96
      }
    },
    {
      name: 'sections',
      title: 'Page Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'heroSection',
          title: 'Hero Section',
          fields: [
            localizedString('headline', 'Headline'),
            localizedString('subtext', 'Subtext'),
            {
              name: 'backgroundImage',
              title: 'Background Image',
              type: 'image',
              options: { hotspot: true }
            },
            localizedString('ctaLabel', 'Call-to-Action Label'),
            {
              name: 'ctaUrl',
              title: 'Call-to-Action URL',
              type: 'string'
            }
          ],
          preview: {
            select: {
              title: 'headline.fr',
              media: 'backgroundImage'
            },
            prepare({ title, media }: any) {
              return {
                title: `Hero: ${title || 'Untitled'}`,
                media
              };
            }
          }
        },
        {
          type: 'object',
          name: 'richTextSection',
          title: 'Rich Text Section',
          fields: [
            localizedText('content', 'Content')
          ],
          preview: {
            select: {
              content: 'content.fr'
            },
            prepare({ content }: any) {
              const block = (content || []).find((block: any) => block._type === 'block');
              return {
                title: 'Rich Text Section',
                subtitle: block ? block.children[0]?.text : 'No content'
              };
            }
          }
        },
        {
          type: 'object',
          name: 'textSection',
          title: 'Text Section',
          fields: [
            localizedString('heading', 'Heading'),
            localizedString('text', 'Text')
          ],
          preview: {
            select: {
              title: 'heading.fr',
              subtitle: 'text.fr'
            }
          }
        },
        {
          type: 'object',
          name: 'servicesGrid',
          title: 'Services Grid',
          fields: [
            localizedString('heading', 'Heading'),
            localizedString('subheading', 'Subheading')
          ],
          preview: {
            prepare() {
              return {
                title: 'Services Grid',
                subtitle: 'Displays all services'
              };
            }
          }
        },
        {
          type: 'object',
          name: 'ministriesGrid',
          title: 'Ministries Grid',
          fields: [
            localizedString('heading', 'Heading'),
            localizedString('subheading', 'Subheading')
          ],
          preview: {
            prepare() {
              return {
                title: 'Ministries Grid',
                subtitle: 'Displays all ministries'
              };
            }
          }
        },
        {
          type: 'object',
          name: 'eventsTeaser',
          title: 'Events Teaser',
          fields: [
            localizedString('heading', 'Heading'),
            localizedString('subheading', 'Subheading'),
            {
              name: 'limit',
              title: 'Number of Events to Show',
              type: 'number',
              initialValue: 3
            }
          ],
          preview: {
            select: {
              limit: 'limit'
            },
            prepare({ limit }: any) {
              return {
                title: 'Events Teaser',
                subtitle: `Shows ${limit || 3} upcoming events`
              };
            }
          }
        },
        {
          type: 'object',
          name: 'contactSection',
          title: 'Contact Section',
          fields: [
            localizedString('heading', 'Heading'),
            {
              name: 'showMap',
              title: 'Show Map',
              type: 'boolean',
              initialValue: false
            }
          ],
          preview: {
            prepare() {
              return {
                title: 'Contact Section',
                subtitle: 'Displays contact information'
              };
            }
          }
        }
      ]
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        localizedString('metaDescription', 'Meta Description')
      ]
    }
  ],
  preview: {
    select: {
      title: 'title.fr',
      slug: 'slug.current'
    },
    prepare({ title, slug }: any) {
      return {
        title: title || 'Untitled',
        subtitle: `/${slug || ''}`
      };
    }
  }
};
