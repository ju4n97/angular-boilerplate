import { CdkMenuModule } from '@angular/cdk/menu';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { LangDefinition, TranslocoService } from '@ngneat/transloco';

type ComposedLang = LangDefinition & { flag: string };

@Component({
    selector: 'app-pick-language',
    standalone: true,
    imports: [CommonModule, CdkMenuModule],
    templateUrl: './pick-language.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PickLanguageComponent {
    private readonly _i18nService = inject(TranslocoService);

    private readonly _flags = new Map<string, string>([
        ['en', 'icon-[emojione--flag-for-united-states]'],
        ['es', 'icon-[emojione--flag-for-colombia]'],
        ['ja', 'icon-[emojione--flag-for-japan]'],
    ]);

    private readonly _langChanges = toSignal(this._i18nService.langChanges$);

    availableLangs: ComposedLang[] = (this._i18nService.getAvailableLangs() as LangDefinition[]).map((lang) => {
        return {
            ...lang,
            flag: this._flags.get(lang.id),
        } as ComposedLang;
    });

    currentLang = computed(() => {
        const changedLang = this._langChanges();

        return this.availableLangs.find((lang) => lang.id === changedLang) as ComposedLang;
    });

    handleLanguageChange(id: string): void {
        this._i18nService.setActiveLang(id);
    }
}
