import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ThemeSchema, ThemeService } from '../../services/theme';

@Component({
    selector: 'app-pick-schema',
    standalone: true,
    imports: [CommonModule, FormsModule],
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
