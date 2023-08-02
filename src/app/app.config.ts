import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { STORAGE } from '@lib/constants';
import { provideI18nConfig, provideI18nLoader, provideI18nPersistLang } from '@lib/i18n';
import { jwtInterceptor, serverErrorInterceptor } from '@lib/interceptors';
import { provideThemeInitializer } from '@lib/services/theme';
import { TranslocoModule } from '@ngneat/transloco';
import { TranslocoPersistLangModule } from '@ngneat/transloco-persist-lang';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes, withComponentInputBinding()),
        provideHttpClient(withFetch(), withInterceptors([serverErrorInterceptor, jwtInterceptor])),
        provideThemeInitializer(),
        provideI18nConfig(),
        provideI18nLoader(),
        importProvidersFrom(
            TranslocoModule,
            TranslocoPersistLangModule.forRoot({
                storage: provideI18nPersistLang(),
                storageKey: STORAGE.lang,
            }),
        ),
    ],
};
