// @ts-ignore
import Layout from "@/app/[lang]/layout";

export default function Page(props: { params: { lang: string } }) {
    const {params} = props

    return <Layout>
        <main className="">
            <p>Test / Lang: {params.lang}</p>
        </main>
    </Layout>
}
