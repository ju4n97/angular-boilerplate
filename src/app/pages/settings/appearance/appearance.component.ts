import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PickFontSizeComponent } from '@lib/components/pick-font-size/pick-font-size.component';
import { PickPrimaryColorComponent } from '@lib/components/pick-primary-color/pick-primary-color.component';
import { PickSchemaComponent } from '@lib/components/pick-schema/pick-schema.component';
import { ThemeService } from '@lib/services';

@Component({
    standalone: true,
    imports: [CommonModule, PickSchemaComponent, PickPrimaryColorComponent, PickFontSizeComponent],
    templateUrl: './appearance.component.html',
})
export class AppearanceComponent {
    private readonly _themeService = inject(ThemeService);

    currentSchema = this._themeService.schema;
    currentPrimaryColor = this._themeService.primaryColor;
    currentFontSize = this._themeService.fontSize;

    handleReset(): void {
        if (confirm('Are you sure you wish to reset to the default settings?')) {
            this._themeService.reset();
        }
    }
}
