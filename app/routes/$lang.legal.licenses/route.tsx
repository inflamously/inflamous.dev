import {ReactNode} from "react";
import {readFilesInFolder} from "~/.server/local-files/reader";
import {useLoaderData} from "@remix-run/react";
import {FileData, resourcePath} from "~/.server/local-files";
import LicenseBlock from "~/legal/license-block";

export const loader = async () => {
    return await readFilesInFolder(`${resourcePath()}/licenses`)
}

export default function Licenses(props: { children: ReactNode }) {
    const data: FileData[] = useLoaderData()

    return <div>
        {data?.map((fileData) => {
            return <LicenseBlock key={fileData.filename} content={fileData.content}/>
        })}
    </div>
}