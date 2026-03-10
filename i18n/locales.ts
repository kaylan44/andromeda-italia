export const locales = ["en", "fr"] as const;
export type AppLocale = (typeof locales)[number];

export const defaultLocale: AppLocale = "en";

export function isAppLocale(locale: string): locale is AppLocale {
  return (locales as readonly string[]).includes(locale);
}

