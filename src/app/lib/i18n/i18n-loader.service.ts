import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Translation, TranslocoLoader } from '@ngneat/transloco';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class I18nLoaderService implements TranslocoLoader {
    private readonly _httpClient = inject(HttpClient);

    getTranslation = (lang: string): Observable<Translation> =>
        this._httpClient.get<Translation>(`/assets/i18n/${lang}.json`);
}
