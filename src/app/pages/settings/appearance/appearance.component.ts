import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PickFontSizeComponent } from '@lib/components/pick-font-size/pick-font-size.component';
import { PickPrimaryColorComponent } from '@lib/components/pick-primary-color/pick-primary-color.component';
import { PickSchemaComponent } from '@lib/components/pick-schema/pick-schema.component';
import { provideI18nInlineLoader } from '@lib/i18n';
import { ThemeService } from '@lib/services';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';

@Component({
    standalone: true,
    imports: [CommonModule, TranslocoModule, PickSchemaComponent, PickPrimaryColorComponent, PickFontSizeComponent],
    providers: [
        provideI18nInlineLoader((lang) => import(`./i18n/${lang}.json`), {
            scope: 'pages/settings/appearance',
            alias: 'appearance',
        }),
    ],
    templateUrl: './appearance.component.html',
})
export class AppearanceComponent {
    private readonly _i18nService = inject(TranslocoService);
    private readonly _themeService = inject(ThemeService);

    currentPrimaryColor = this._themeService.primaryColor;

    handleReset(): void {
        const message = this._i18nService.translate('appearance.sections.reset.button.confirm');

        if (confirm(message)) {
            this._themeService.reset();
        }
    }
}
