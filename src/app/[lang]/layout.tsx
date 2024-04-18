import type {Metadata} from "next";
import {Roboto} from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";
import {PageProps} from "@/_utilities/types";

const roboto = Roboto({
    subsets: ["latin"],
    weight: "500"
});

export const metadata: Metadata = {
    title: "nflamously.dev",
    description: "Webpage by inflamously",
    icons: [{
        sizes: 'any',
        url: '/favicon.ico',
        type: 'image/x-icon',
    }]
};

const RootLayout = (props: { children: ReactNode; } & PageProps) => {
    const {children, params} = props;
    const {lang} = props?.params

    return (
        <html lang={lang ?? 'en'}>
        <body className={`${roboto.className} p-8`}>{children}</body>
        </html>
    );
}

export default RootLayout