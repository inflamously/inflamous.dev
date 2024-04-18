export const I18N = {
    defaultLocale: "de-DE",
    locales: ["en", "de-DE"],
} as const;

export type Locale = (typeof I18N)["locales"][number];

export const getLocaleFromPathname = (pathname: string, defaultLocale: string): string | undefined => {
    const locale = I18N.locales.filter((locale) => pathname.includes(`/${locale.toLocaleLowerCase()}`))[0]
    return locale ?? defaultLocale;
}