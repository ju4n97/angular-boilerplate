import { Provider } from '@angular/core';
import { TRANSLOCO_LOADER } from '@ngneat/transloco';
import { I18nLoaderService } from './i18n-loader.service';

export const provideI18nLoader = (): Provider => ({
    provide: TRANSLOCO_LOADER,
    useClass: I18nLoaderService,
});
