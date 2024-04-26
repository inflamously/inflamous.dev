import {ReactNode} from "react";

const HeaderList = (props: { children: ReactNode }) => {
    const {children} = props;

    return <ul>
        {children}
    </ul>
}

const HeaderItem = (props: { children: ReactNode }) => {
    const {children} = props

    return <li>
        {children}
    </li>
}

export default function Header() {
    return <div className={"border-b-tertiary border-b-2"}>
        <div className={"border-b-secondary border-b-4 pb-2"}>
            <HeaderList>
                <HeaderItem>
                    <a href={"https://nflamously.dev"}><img src={"/images/logo.png"} alt={"nflamously.dev logo"}
                                                            width={160} height={48}/></a>
                </HeaderItem>
            </HeaderList>
        </div>
    </div>
}