import { ENVIRONMENT_INITIALIZER, EnvironmentProviders, inject, makeEnvironmentProviders } from '@angular/core';
import { ThemeService } from './theme.service';

export const provideThemeInitializer = (): EnvironmentProviders =>
    makeEnvironmentProviders([
        {
            provide: ENVIRONMENT_INITIALIZER,
            multi: true,
            useValue(): void {
                inject(ThemeService).initialize();
            },
        },
    ]);
