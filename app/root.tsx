import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration, useLoaderData,
} from "@remix-run/react";
import type {LinksFunction, LoaderFunctionArgs, MetaFunction} from "@remix-run/node";
import {ReactNode} from "react";
import {redirect} from "@remix-run/router";
import Header from "~/layout/header";
import tailwind from '~/root.css?url'
import {LOCALES} from "~/.server/language/locales";

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
    const {headers} = request

    const preferredLanguage = headers.get('accept-language');
    console.log(preferredLanguage)

    return LOCALES.some((lang) => params?.lang === lang) ? {lang: params?.lang} : redirect('/en')
}

export function Layout(props: { children: ReactNode }) {
    const {lang} = useLoaderData();

    const {children} = props
    return (
        <html
            className={"p-2 bg-quaternary"}
            lang={lang ?? 'en'}>
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
    return <div>
        <Header/>
        <Outlet/>
    </div>
}
