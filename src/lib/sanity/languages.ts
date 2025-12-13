export interface Language {
  id: string;
  title: string;
  isDefault: boolean;
}

export type LanguageCode = 'fr' | 'en';

export const languages: Language[] = [
  { id: 'fr', title: 'Français', isDefault: true },
  { id: 'en', title: 'English', isDefault: false }
];

export const defaultLanguage = languages.find(lang => lang.isDefault) || languages[0];

export const supportedLanguages = languages.map(lang => lang.id);

export function isValidLanguage(lang: string): boolean {
  return supportedLanguages.includes(lang);
}

export function getLanguageOrDefault(lang?: string): string {
  if (!lang) return defaultLanguage.id;
  return isValidLanguage(lang) ? lang : defaultLanguage.id;
}
