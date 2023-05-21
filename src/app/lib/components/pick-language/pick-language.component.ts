import { CdkMenuModule } from '@angular/cdk/menu';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
    selector: 'app-pick-language',
    standalone: true,
    imports: [CommonModule, CdkMenuModule],
    templateUrl: './pick-language.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PickLanguageComponent {
    availableLanguages = [
        {
            name: 'en',
            title: 'English',
            flag: 'icon-[emojione--flag-for-united-states]',
        },
        {
            name: 'es',
            title: 'Español',
            flag: 'icon-[emojione--flag-for-colombia]',
        },
        {
            name: 'ja',
            title: 'Japanese',
            flag: 'icon-[emojione--flag-for-japan]',
        },
    ];

    currentLanguage = signal({
        name: 'en',
        title: 'English',
        flag: 'icon-[emojione--flag-for-united-states]',
    });

    handleLanguageChange(name: string): void {
        console.log(name);
    }
}
