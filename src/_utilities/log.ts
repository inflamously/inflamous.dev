export const log = (
    category: 'middleware' | 'component',
    component: string,
    ...text: unknown[]
) => console.log(`[${category}:${component}]`, text)