import { Provider } from '@angular/core';

import { TRANSLOCO_PERSIST_LANG_STORAGE } from '@ngneat/transloco-persist-lang';

export const provideI18nPersistLang = (): Provider => ({
    provide: TRANSLOCO_PERSIST_LANG_STORAGE,
    useValue: localStorage,
});
