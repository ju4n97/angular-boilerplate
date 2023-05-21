import { Provider } from '@angular/core';
import { environment } from '@env/environment';
import { TRANSLOCO_CONFIG, TranslocoConfig } from '@ngneat/transloco';

export const provideI18n = (): Provider => ({
    provide: TRANSLOCO_CONFIG,
    useValue: {
        availableLangs: ['en', 'es', 'ja'],
        reRenderOnLangChange: true,
        fallbackLang: 'es',
        defaultLang: 'en',
        prodMode: environment.production,
    } as TranslocoConfig,
});
