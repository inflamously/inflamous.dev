import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";
import type {LinksFunction, MetaFunction} from "@remix-run/node";
import rootcss from './root.css?url'
import {ReactNode} from "react";
import {redirect} from "@remix-run/router";
import {LOCALES} from "~/locales";
import {PageProps} from "~/page";
import Header from "~/components/molecule/header";

export const meta: MetaFunction = () => {
    return [
        {name: "description", content: "nflamously.dev website"},
    ];
};

export const links: LinksFunction = () => [
    {
        rel: "stylesheet",
        href: rootcss,
    }
]

export const loader = async (props: PageProps) => {
    const {params} = props

    return LOCALES.some((lang) => params?.lang === lang) ? null : redirect('/en')
}

export function Layout({children}: { children: ReactNode }) {
    return (
        <html lang="en">
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
