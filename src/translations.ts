import {PageProps} from "@/_utilities/page.model";

const LOCALE_FILES = {
    en: () => import("@/_translations/en.json").then((module) => module.default),
    'de-DE': () => import("@/_translations/de.json").then((module) => module.default),
};

type Dict = Awaited<ReturnType<typeof LOCALE_FILES["en"]>> & Awaited<ReturnType<typeof LOCALE_FILES["de-DE"]>>

export const getLocaleDictionary = async (props: PageProps): Promise<{
    translate: (key: string) => string
}> => {
    let dict: Dict | undefined = undefined

    if (!props?.params?.lang) {
        dict = await LOCALE_FILES.en() as Dict
    }

    dict = await LOCALE_FILES[props?.params?.lang as keyof typeof LOCALE_FILES]?.() as Dict ?? await LOCALE_FILES.en();

    return {
        translate: (key: string) => translate(key, dict)
    }
}

export const translate = (key: string, dict: Dict): string => {
    const pathToKey = key.split('.')
    let value: Dict | string = dict
    for (const key of pathToKey) {
        if (typeof value === 'object') {
            // @ts-ignore
            value = value[key];
        }
    }
    return value as string
}