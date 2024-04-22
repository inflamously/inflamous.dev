import type {Metadata} from "next";
import {Roboto} from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";

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

const RootLayout = (props: { children: ReactNode; }) => {
    const {children} = props;
    const {lang} = (props as unknown as { params: { lang: string } })?.params ?? {lang: "en"}
    return (
        <html>
        <body className={`${roboto.className}`}>{children}</body>
        </html>
    );
}

export default RootLayout