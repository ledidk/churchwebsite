import { localizedString, localizedText } from './languageHelper';

export default {
  name: 'event',
  title: 'Events',
  type: 'document',
  fields: [
    localizedString('title', 'Event Title'),
    localizedText('description', 'Description'),
    {
      name: 'startDateTime',
      title: 'Start Date & Time',
      type: 'datetime',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'endDateTime',
      title: 'End Date & Time',
      type: 'datetime'
    },
    localizedString('location', 'Location'),
    {
      name: 'image',
      title: 'Event Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'eventType',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          { title: 'Upcoming Event', value: 'upcoming' },
          { title: 'Recurring Event', value: 'recurring' },
          { title: 'Annual Event', value: 'annual' },
          { title: 'Camp/Retreat', value: 'camp' }
        ]
      },
      initialValue: 'upcoming'
    },
    localizedString('cost', 'Cost/Price'),
    localizedText('registrationInfo', 'Registration Information'),
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first'
    }
  ],
  orderings: [
    {
      title: 'Start Date, Newest',
      name: 'startDateDesc',
      by: [{ field: 'startDateTime', direction: 'desc' }]
    },
    {
      title: 'Start Date, Oldest',
      name: 'startDateAsc',
      by: [{ field: 'startDateTime', direction: 'asc' }]
    }
  ],
  preview: {
    select: {
      title: 'title.fr',
      date: 'startDateTime',
      media: 'image',
      type: 'eventType'
    },
    prepare({ title, date, media, type }: any) {
      const dateStr = date ? new Date(date).toLocaleDateString('fr-CA') : 'No date';
      return {
        title: title || 'Untitled Event',
        subtitle: `${dateStr} - ${type || 'upcoming'}`,
        media
      };
    }
  }
};
