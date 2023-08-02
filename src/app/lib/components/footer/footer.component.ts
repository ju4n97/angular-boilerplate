import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { provideI18nInlineLoader } from '@lib/i18n';
import { PACKAGE_JSON, providePackageJson } from '@lib/providers';
import { TranslocoModule } from '@ngneat/transloco';
import { LogoComponent } from '../logo/logo.component';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule, RouterModule, TranslocoModule, LogoComponent],
    providers: [
        provideI18nInlineLoader((lang) => import(`./i18n/${lang}.json`), {
            scope: 'components/footer',
            alias: 'footer',
        }),
        providePackageJson(),
    ],
    templateUrl: './footer.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
    readonly packageJson = inject(PACKAGE_JSON);

    readonly currentYear = new Date().getFullYear();
}
