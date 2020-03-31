
const prefferedLanguage = "EN";

export function selectPreferredLanguage(languages: string[]): string {
  const isPreferredLanguageAvailable = languages.some(language => language === prefferedLanguage);

  if (isPreferredLanguageAvailable) {
    return prefferedLanguage;
  }

  return languages[0];
}
