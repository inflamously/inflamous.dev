import {ReactNode} from "react";
import {Outlet} from "@remix-run/react";

export async function loader() {
    return null
}

export default function Lang(props: { children: ReactNode }) {
    return <div>
        <p>Lang route</p>
        <Outlet />
    </div>
}