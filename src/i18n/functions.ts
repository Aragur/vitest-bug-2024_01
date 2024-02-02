import {
  createI18n as createI18nOriginal,
  type I18n,
  type Locale,
} from 'vue-i18n';

export interface CreateI18nOptions {
  loadLocaleFunc: (locale: string) => Promise<Record<string, unknown>> | Record<string, unknown>;
}
export const createI18n = (options: CreateI18nOptions) => {
  let i18n: I18n<{}, {}, {}, Locale, false> | undefined;
  const initializeI18n = () => {
    i18n = createI18nOriginal({});
    return i18n;
  };
  return {
    initializeI18n,
  };
};
