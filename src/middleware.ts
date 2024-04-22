import type {NextRequest} from "next/server";
import {NextResponse} from "next/server";
import {getLocaleFromPathname, I18N} from "@/i18n-config";
import {log} from "@/_utilities/log";

const URL_PATH_FILTER = [
    '/_next/static',
    '/favicon.ico',
    '/api',
    '/images'
]

const requestFilter = (request: NextRequest) => {
    const {pathname} = request.nextUrl;
    return URL_PATH_FILTER.some((path) => pathname.startsWith(path))
}

const redirectToLocaleSite = (request: NextRequest) => {
    const {pathname} = request.nextUrl;

    const nextLocale = getLocaleFromPathname(pathname, I18N.defaultLocale);
    const segments = pathname.split('/');

    log('middleware', 'locale', pathname, segments, nextLocale)

    if (pathname === "/") {
        return NextResponse.redirect(new URL(`/${nextLocale}`, request.url))
    }

    if (segments[1] !== nextLocale) {
        return NextResponse.redirect(new URL(`/${nextLocale}`, request.url))
    }

    return undefined
}

export function middleware(request: NextRequest) {
    const {pathname, href, locale} = request.nextUrl;

    if (requestFilter(request)) {
        log('middleware', 'filter', pathname);
        return NextResponse.next({request})
    }

    const localeRedirect = redirectToLocaleSite(request)
    if (localeRedirect) {
        return localeRedirect;
    }
}

export const config = {};