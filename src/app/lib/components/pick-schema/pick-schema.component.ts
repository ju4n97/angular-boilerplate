import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideI18nInlineLoader } from '@lib/i18n';
import { TranslocoModule } from '@ngneat/transloco';
import { ThemeSchema, ThemeService } from '../../services/theme';

@Component({
    selector: 'app-pick-schema',
    standalone: true,
    imports: [CommonModule, TranslocoModule, FormsModule],
    providers: [
        provideI18nInlineLoader((lang) => import(`./i18n/${lang}.json`), {
            scope: 'components/pick-schema',
            alias: 'pick-schema',
        }),
    ],
    templateUrl: './pick-schema.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PickSchemaComponent {
    @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
    @Input() displayCaptions = true;

    private readonly _themeService = inject(ThemeService);

    readonly availableSchemas = this._themeService.availableSchemas;

    readonly SCHEMA = ThemeSchema;

    currentSchema = this._themeService.schema;

    handleSchemaChange(schema: ThemeSchema): void {
        this._themeService.setSchema(schema);
    }
}
