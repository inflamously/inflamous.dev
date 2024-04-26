import {ReactNode} from "react";

const FooterList = (props: { children: ReactNode }) => {
    const {children} = props;

    return <ul className={"flex pl-4 pr-4 items-center h-full"}>
        {children}
    </ul>
}

const FooterItem = (props: { children: ReactNode }) => {
    const {children} = props

    return <li>
        {children}
    </li>
}

export default function Footer() {
    // const {translate} = useTranslation()

    return <div className={"bg-tertiary bottom-zero left-zero h-1/6 w-full fixed p-2"}>
        <FooterList>
            <FooterItem>
                <p>Impressum</p>
                <p>Datenschutz</p>
            </FooterItem>
        </FooterList>
    </div>
}