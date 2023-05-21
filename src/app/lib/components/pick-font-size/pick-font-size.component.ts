import { CdkMenuModule } from '@angular/cdk/menu';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { provideI18nInlineLoader } from '@lib/i18n';
import { ThemeFontSize, ThemeService } from '@lib/services/theme';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
    selector: 'app-pick-font-size',
    standalone: true,
    imports: [CommonModule, TranslocoModule, CdkMenuModule],
    providers: [
        provideI18nInlineLoader((lang) => import(`./i18n/${lang}.json`), {
            scope: 'components/pick-font-size',
            alias: 'pick-font-size',
        }),
    ],
    templateUrl: './pick-font-size.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PickFontSizeComponent {
    private readonly _themeService = inject(ThemeService);

    readonly availableFontSizes = this._themeService.availableFontSizes;

    currentFontSize = this._themeService.fontSize;

    handleFontSizeChange(fontSize: ThemeFontSize): void {
        this._themeService.setFontSize(fontSize);
    }
}
