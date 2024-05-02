import { init18n } from 'core/i18n/init';
import en from 'translation/en.json';
import ru from 'translation/ru.json';

export const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
};

export const fallbackLng = 'en';

export type LanguageCode = keyof typeof resources;

const i18n = init18n({ resources, fallbackLng });

export default i18n;
