import { CdkMenuModule } from '@angular/cdk/menu';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ThemeFontSize, ThemeService } from '@lib/services/theme';

@Component({
    selector: 'app-pick-font-size',
    standalone: true,
    imports: [CommonModule, CdkMenuModule],
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
