import { CdkMenuModule } from '@angular/cdk/menu';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { provideI18nInlineLoader } from '@lib/i18n';
import { AuthService } from '@lib/services';
import { TranslocoModule } from '@ngneat/transloco';
import { PickSchemaComponent } from '../pick-schema/pick-schema.component';

@Component({
    selector: 'app-account-menu',
    standalone: true,
    imports: [CommonModule, RouterModule, TranslocoModule, CdkMenuModule, PickSchemaComponent],
    providers: [
        provideI18nInlineLoader((lang) => import(`./i18n/${lang}.json`), {
            scope: 'components/account-menu',
            alias: 'account-menu',
        }),
    ],
    templateUrl: './account-menu.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountMenuComponent {
    private readonly _router = inject(Router);
    private readonly _authService = inject(AuthService);

    currentSession = this._authService.session;

    handleLogout(): void {
        this._authService.logout();

        this._router.navigate([`/auth/login`]);
    }
}
