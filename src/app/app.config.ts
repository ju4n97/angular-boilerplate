import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { TranslocoHttpLoader, translocoConfig } from '@lib/i18n';
import { jwtInterceptor, serverErrorInterceptor } from '@lib/interceptors';
import { provideThemeInitializer } from '@lib/services/theme';
import { provideTransloco } from '@ngneat/transloco';
import { provideTranslocoPersistLang } from '@ngneat/transloco-persist-lang';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes, withComponentInputBinding()),
        provideHttpClient(withFetch(), withInterceptors([serverErrorInterceptor, jwtInterceptor])),
        provideThemeInitializer(),
        provideTransloco({
            config: translocoConfig(),
            loader: TranslocoHttpLoader,
        }),
        provideTranslocoPersistLang({
            getLangFn(s) {
                console.log(s);
                return 'en';
            },
            storage: {
                useValue: localStorage,
            },
            storageKey: 'lang',
        }),
    ],
};
