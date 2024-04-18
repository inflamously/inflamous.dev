export default async function LicenseBlock(props: {
    content: string
}) {
    return <div>{props?.content ?? ''}</div>
}