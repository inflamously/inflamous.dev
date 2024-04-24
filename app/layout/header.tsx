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
    return <div>
        <HeaderList>
            <HeaderItem>
                <img src={"/images/logo.png"} alt={"nflamously.dev logo"} width={160} height={48}/>
            </HeaderItem>
        </HeaderList>
    </div>
}