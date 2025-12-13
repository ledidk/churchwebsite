import { languages, defaultLanguage, type LanguageCode } from './sanity/languages';

/**
 * Validates if a language code is supported
 */
export function isValidLanguage(lang: string): lang is LanguageCode {
  return languages.some(l => l.id === lang);
}

/**
 * Gets a valid language code, falling back to default if invalid
 */
export function getValidLanguage(lang: string | undefined): LanguageCode {
  if (!lang) return defaultLanguage.id as LanguageCode;
  return isValidLanguage(lang) ? (lang as LanguageCode) : (defaultLanguage.id as LanguageCode);
}

/**
 * Builds a localized path
 */
export function getLocalizedPath(slug: string, lang: LanguageCode): string {
  const cleanSlug = slug.startsWith('/') ? slug.slice(1) : slug;
  return `/${lang}/${cleanSlug}`;
}

/**
 * Switches language while maintaining the current slug
 */
export function switchLanguage(currentPath: string, newLang: LanguageCode): string {
  // Remove leading slash
  const path = currentPath.startsWith('/') ? currentPath.slice(1) : currentPath;
  
  // Split path into parts
  const parts = path.split('/');
  
  // If first part is a language code, replace it
  if (parts[0] && isValidLanguage(parts[0])) {
    parts[0] = newLang;
    return '/' + parts.join('/');
  }
  
  // Otherwise, prepend the new language
  return `/${newLang}/${path}`;
}

/**
 * Extracts language and slug from URL path
 */
export function parseLocalizedPath(path: string): { lang: LanguageCode; slug: string } {
  // Remove leading slash
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Split into parts
  const parts = cleanPath.split('/');
  
  // Check if first part is a language
  if (parts[0] && isValidLanguage(parts[0])) {
    const lang = parts[0] as LanguageCode;
    const slug = parts.slice(1).join('/') || 'index';
    return { lang, slug };
  }
  
  // Default to French if no language in path
  return {
    lang: defaultLanguage.id as LanguageCode,
    slug: cleanPath || 'index'
  };
}

/**
 * Gets the alternate language for the current language
 */
export function getAlternateLanguage(currentLang: LanguageCode): LanguageCode {
  return currentLang === 'fr' ? 'en' : 'fr';
}
