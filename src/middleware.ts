import type {NextRequest} from "next/server";
import {NextResponse} from "next/server";
import {getLocaleFromPathname, I18N} from "@/i18n-config";

const requestFilter = (request: NextRequest) => {
    const {pathname} = request.nextUrl;
    return pathname.startsWith('/_next/static') || pathname.startsWith('/favicon.ico') || pathname.startsWith('/api');
}

const redirectToLocaleSite = (request: NextRequest) => {
    const {pathname} = request.nextUrl;

    const nextLocale = getLocaleFromPathname(pathname, I18N.defaultLocale);

    const segments = pathname.split('/');

    console.log('[middleware:locale]', pathname, segments, nextLocale)

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
        //console.log('[middleware:filter]', pathname)
        return NextResponse.next({request})
    }

    const localeRedirect = redirectToLocaleSite(request)
    if (localeRedirect) {
        return localeRedirect;
    }
}

export const config = {};