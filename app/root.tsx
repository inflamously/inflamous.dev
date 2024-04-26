import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration, useLoaderData,
} from "@remix-run/react";
import {LinksFunction, LoaderFunctionArgs, MetaFunction, redirectDocument} from "@remix-run/node";
import {ReactNode} from "react";
import Header from "~/layout/header";
import tailwind from '~/root.css?url'
import {resolveNearestLocale, isUrlSupportedLocale} from "~/.server/language/locales";
import Footer from "~/layout/footer";

export const meta: MetaFunction = () => {
    return [
        {name: "description", content: "nflamously.dev website"},
    ];
};

export const links: LinksFunction = () => [
    {
        rel: "stylesheet",
        href: tailwind,
    }
]

export const loader = async (props: LoaderFunctionArgs) => {
    const {params, request} = props
    const {lang} = resolveNearestLocale(request.headers.get('accept-language'));
    const url = new URL(request.url);

    if (url.pathname === '/') {
        return lang ? {lang} : redirectDocument('en')
    }

    if (!isUrlSupportedLocale(params?.lang ?? '')) {
        return redirectDocument('en')
    }

    return {
        params: {
            lang: params?.lang ?? 'en',
        }
    }
}

export function Layout(props: { children: ReactNode }) {
    const {lang} = useLoaderData();

    const {children} = props
    return (
        <html
            className={"p-2 bg-quaternary"}
            lang={lang ?? 'en-US'}>
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <Meta/>
            <Links/>
            <title>nflamously.dev</title>
        </head>
        <body>
        {children}
        <ScrollRestoration/>
        <Scripts/>
        </body>
        </html>
    );
}

export default function App() {
    const data = useLoaderData();
    // TODO: Set translation function up const {translate} based on given lang
    // TODO: Setup a docker container
    return <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
}
