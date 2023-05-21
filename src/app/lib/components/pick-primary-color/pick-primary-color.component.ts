import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ThemePrimaryColor, ThemeService } from '../../services/theme';

@Component({
    selector: 'app-pick-primary-color',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './pick-primary-color.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PickPrimaryColorComponent {
    private readonly _themeService = inject(ThemeService);

    readonly availablePrimaryColors = this._themeService.availablePrimaryColors;

    currentPrimaryColor = this._themeService.primaryColor;

    handlePrimaryColorChange(primaryColor: ThemePrimaryColor): void {
        this._themeService.setPrimaryColor(primaryColor);
    }
}
