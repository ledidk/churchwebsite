export const languages = [
  { id: 'fr', title: 'Français', isDefault: true },
  { id: 'en', title: 'English', isDefault: false }
];

export const baseLanguage = languages.find(l => l.isDefault);

export function localizedString(name: string, title: string, description?: string) {
  return {
    name,
    title,
    type: 'object',
    description,
    fields: languages.map(lang => ({
      name: lang.id,
      type: 'string',
      title: lang.title,
      validation: (Rule: any) => lang.isDefault ? Rule.required() : Rule.optional()
    }))
  };
}

export function localizedText(name: string, title: string, description?: string) {
  return {
    name,
    title,
    type: 'object',
    description,
    fields: languages.map(lang => ({
      name: lang.id,
      type: 'array',
      title: lang.title,
      of: [{ type: 'block' }],
      validation: (Rule: any) => lang.isDefault ? Rule.required() : Rule.optional()
    }))
  };
}
