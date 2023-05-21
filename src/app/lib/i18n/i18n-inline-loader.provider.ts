import { Provider } from '@angular/core';
import { InlineLoader, TRANSLOCO_SCOPE, Translation } from '@ngneat/transloco';

export const inlineLoaderFactory = (loader: (lang: string) => Promise<JSON>): InlineLoader => {
    const inlineLoader: InlineLoader = {};

    for (const lang of ['es', 'en', 'ja']) {
        inlineLoader[lang] = (): Promise<Translation> => loader(lang);
    }

    return inlineLoader;
};

export const provideI18nInlineLoader = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    loader: (lang: string) => Promise<any>,
    config: {
        scope: string;
        alias?: string;
    },
): Provider => ({
    provide: TRANSLOCO_SCOPE,
    useValue: {
        scope: config.scope,
        alias: config.alias,
        loader: inlineLoaderFactory(loader),
    },
});
