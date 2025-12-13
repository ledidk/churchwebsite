import { localizedString, localizedText } from './languageHelper';

export default {
  name: 'ministry',
  title: 'Ministries',
  type: 'document',
  fields: [
    localizedString('title', 'Ministry Title'),
    localizedText('description', 'Description'),
    {
      name: 'image',
      title: 'Ministry Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
      validation: (Rule: any) => Rule.required()
    }
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }]
    }
  ],
  preview: {
    select: {
      title: 'title.fr',
      media: 'image',
      order: 'order'
    },
    prepare({ title, media, order }: any) {
      return {
        title: title || 'Untitled Ministry',
        subtitle: `Order: ${order || 0}`,
        media
      };
    }
  }
};
