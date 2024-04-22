import {getLocaleDictionary} from "@/translations";
import {PageProps} from "@/_utilities/page.model";
import {existsSync, promises as fs} from 'fs'
import {join} from 'path'
import LicenseBlock from "@/app/[lang]/legal/legal-disclosure/license-block";

async function readLicenseFilepaths() {
    try {
        const path = join(process.cwd(), '/src/app/[lang]/legal/legal-disclosure', '_licenses')
        const files = await fs.readdir(path)
        return files?.map((file) => ({
            filename: file,
            path
        }))
    } catch (err) {
        console.log(err);
    }
}

async function readLicenses(filepaths: {
    filename: string,
    path: string
}[]) {
    try {
        const licenses: Array<{
            filename: string,
            data: string
        }> = []

        for (const {path, filename} of filepaths) {
            const filepath = join(path, filename)

            if (!existsSync(filepath)) {
                console.warn(`[component:license-block] file ${filepath} not found.`)
            }

            const data = await fs.readFile(filepath, {encoding: 'utf8'})

            licenses.push({
                filename,
                data: data ?? ''
            })
        }

        return licenses
    } catch (err) {
        console.error(err)
        return []
    }
}

async function getLicenses() {
    const filepaths = await readLicenseFilepaths()
    return await readLicenses(filepaths ?? [])
}

export default async function LegalDisclosurePage(props: PageProps) {
    const licenses = await getLicenses()
    const {translate} = await getLocaleDictionary(props)

    return <div>
        <h4>{translate('legal.licenses')}</h4>
        {
            licenses?.map((license) => {
                return <LicenseBlock key={license.filename} content={license.data}/>
            })
        }
    </div>
}