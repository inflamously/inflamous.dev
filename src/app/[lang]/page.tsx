// @ts-ignore
import Layout from "@/app/[lang]/layout";
import {PageProps} from "@/_utilities/page.model";
import Header from "./header";

export default function Page(props: PageProps) {
    const {params} = props

    return <Layout>
        <main>
            <Header/>
        </main>
    </Layout>
}
