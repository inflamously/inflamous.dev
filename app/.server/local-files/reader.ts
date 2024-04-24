import {readdir, readFile} from 'fs/promises'
import {FileData} from "~/.server/local-files/types";

export const readFolder = async (path: string) => {
    return await readdir(path)
}

export const readFilesInFolder = async (path: string) => {
    const files = (await readFolder(path)).map((file) => `${path}/${file}`)
    const fileData: Array<FileData> = []
    for (const file of files) {
        fileData.push({
            filename: file,
            path,
            content: await readFile(file, {encoding: 'utf8'})
        })
    }

    return fileData
}