import { isDevMode } from '@angular/core';
import { AvailableLangs } from '@ngneat/transloco';
import { PartialTranslocoConfig } from '@ngneat/transloco/lib/transloco.config';

export const AVAILABLE_LANGS = ['en', 'es'] satisfies AvailableLangs;

export const DEFAULT_LANG = 'en';

export const FALLBACK_LANG = 'en';

export const translocoConfig = (): PartialTranslocoConfig => ({
    availableLangs: AVAILABLE_LANGS,
    defaultLang: DEFAULT_LANG,
    fallbackLang: FALLBACK_LANG,
    missingHandler: {
        useFallbackTranslation: true,
        logMissingKey: true,
    },
    reRenderOnLangChange: true,
    prodMode: !isDevMode(),
});
