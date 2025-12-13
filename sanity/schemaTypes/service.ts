import { localizedString, localizedText } from './languageHelper';

export default {
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    localizedString('title', 'Service Title'),
    localizedText('description', 'Description'),
    {
      name: 'dayTime',
      title: 'Day & Time',
      type: 'string',
      description: 'e.g., "Sunday 9:00 AM & 11:00 AM" or "Dimanche 9h00 & 11h00"',
      validation: (Rule: any) => Rule.required()
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
      dayTime: 'dayTime',
      order: 'order'
    },
    prepare({ title, dayTime, order }: any) {
      return {
        title: title || 'Untitled Service',
        subtitle: `${dayTime || 'No time set'} (Order: ${order || 0})`
      };
    }
  }
};
