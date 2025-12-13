import type { LocalizedString, LocalizedText } from './types';
import { defaultLanguage } from './languages';

/**
 * Get localized string value with fallback to default language
 */
export function getLocalizedString(
  field: LocalizedString | undefined,
  lang: string
): string {
  if (!field) return '';
  return field[lang] || field[defaultLanguage.id] || '';
}

/**
 * Get localized text/portable text with fallback to default language
 */
export function getLocalizedText(
  field: LocalizedText | undefined,
  lang: string
): any[] {
  if (!field) return [];
  return field[lang] || field[defaultLanguage.id] || [];
}

/**
 * Build image URL from Sanity asset reference
 */
export function buildImageUrl(
  projectId: string,
  dataset: string,
  assetRef: string,
  width?: number,
  height?: number
): string {
  if (!assetRef) return '';
  
  const [, id, dimensions, format] = assetRef.split('-');
  let url = `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}-${dimensions}.${format}`;
  
  const params: string[] = [];
  if (width) params.push(`w=${width}`);
  if (height) params.push(`h=${height}`);
  
  if (params.length > 0) {
    url += `?${params.join('&')}`;
  }
  
  return url;
}

/**
 * Format date for display
 */
export function formatDate(dateString: string, lang: string): string {
  const date = new Date(dateString);
  const locale = lang === 'fr' ? 'fr-CA' : 'en-CA';
  
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Format time for display
 */
export function formatTime(dateString: string, lang: string): string {
  const date = new Date(dateString);
  const locale = lang === 'fr' ? 'fr-CA' : 'en-CA';
  
  return date.toLocaleTimeString(locale, {
    hour: '2-digit',
    minute: '2-digit'
  });
}

/**
 * Format date and time for display
 */
export function formatDateTime(dateString: string, lang: string): string {
  return `${formatDate(dateString, lang)} ${formatTime(dateString, lang)}`;
}
