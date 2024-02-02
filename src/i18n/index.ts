import { createI18n } from './functions';

export const { initializeI18n } = createI18n({
  loadLocaleFunc: async (locale) => {
    const module = await import(`./locales/${locale}.json`);
    return module.default;
  },
});