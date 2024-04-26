export const LOCALES = ['en', 'de']

export const parseLocale = (acceptLanguages?: string | null) => acceptLanguages?.split(',').map((localeString) => {
    const [languageLocale, quality] = localeString.split(';')
    const [language, locale] = languageLocale.split('-')

    return {
        language,
        locale,
        quality: quality ?? 'q=1'
    }
});

export const resolveNearestLocale = (acceptLanguages?: string | null) => {
    const languageLocale = parseLocale(acceptLanguages)?.reduce(
        (prevLocale, nextLocale) => prevLocale.quality > nextLocale.quality ? prevLocale : nextLocale
    );
    return LOCALES.some((lang) => languageLocale?.language === lang) ? {lang: languageLocale?.language ?? null} : {lang: null}
}

export const isUrlSupportedLocale = (locale: string) => LOCALES.map((locale) => `/${locale}`).some((pathname) => pathname === `/${locale}`)