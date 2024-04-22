import {ReactNode} from "react";
import Image from "next/image";

const HeaderItem = (props: { children: ReactNode }) => {
    return <li>
        {props?.children}
    </li>
}

const HeaderList = (props: { children?: ReactNode }) => {
    const {children} = props

    return <ul className={"flex border-b-color-primary border-b-2 pb-2 pt-2"}>
        {children}
    </ul>
}

export default function Header() {
    return <nav className={"border-b-2 border-b-color-secondary ml-8 mr-8"}>
        <HeaderList>
            <HeaderItem>
                <Image
                    className={"ml-4"}
                    src="/images/logo.png" alt="nflamously.dev logo" width="160" height="64"/>
            </HeaderItem>
        </HeaderList>
    </nav>
}