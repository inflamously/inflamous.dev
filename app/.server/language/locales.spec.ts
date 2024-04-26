import {describe, expect, it} from "@jest/globals";
import {parseLocale, resolveNearestLocale} from "~/.server/language/locales";

describe('Tests locale support', () => {
    it('Simple parsing of accept-language header', () => {
        const locales = parseLocale("en,de-DE;q=0.9,de;q=0.8")
        expect(locales).toEqual([
            {
                language: 'en',
                locale: undefined,
                quality: 'q=1'
            },
            {
                language: 'de',
                locale: 'DE',
                quality: 'q=0.9'
            },
            {
                language: 'de',
                locale: undefined,
                quality: 'q=0.8'
            }
        ])
    })

    it('should find nearest locale which is en', () => {
        const {lang} = resolveNearestLocale("en,de-DE;q=0.9,de;q=0.8")
        expect(lang).toEqual('en')
        expect(lang).not.toEqual('de')
    })

    it('should find nearest locale which is de', () => {
        const {lang} = resolveNearestLocale("de-DE;q=0.9,de;q=0.8")
        expect(lang).toEqual('de')
        expect(lang).not.toEqual('en')
    })

    it('should use fallback language', () => {
        const {lang} = resolveNearestLocale(null)
        expect(lang).toEqual(null)
        expect(lang).not.toEqual('en')
    })
});