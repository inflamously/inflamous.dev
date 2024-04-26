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
import {LOCALES, resolveNearestLocale} from "~/.server/language/locales";

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
    const {request} = props

    const {lang} = resolveNearestLocale(request.headers.get('accept-language'));

    return lang ? {lang} : redirect('en')
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
    return <div>
        <Header/>
        <Outlet/>
    </div>
}
