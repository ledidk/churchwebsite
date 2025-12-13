import { localizedString, localizedText } from './languageHelper';

export default {
  name: 'teamMember',
  title: 'Team Members',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    localizedString('role', 'Role/Position'),
    localizedText('bio', 'Biography'),
    {
      name: 'photo',
      title: 'Photo',
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
      title: 'name',
      role: 'role.fr',
      media: 'photo',
      order: 'order'
    },
    prepare({ title, role, media, order }: any) {
      return {
        title: title || 'Untitled Team Member',
        subtitle: `${role || 'No role'} (Order: ${order || 0})`,
        media
      };
    }
  }
};
