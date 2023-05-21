import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '@lib/services';
import { AccountMenuComponent } from '../account-menu/account-menu.component';
import { LogoComponent } from '../logo/logo.component';
import { PickLanguageComponent } from '../pick-language/pick-language.component';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, RouterModule, LogoComponent, PickLanguageComponent, AccountMenuComponent],
    templateUrl: './navbar.component.html',
    styles: [
        `
            :host {
                @apply sticky top-0;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
    private readonly _router = inject(Router);
    private readonly _authService = inject(AuthService);

    isAuthenticated = this._authService.isAuthenticated;

    handleLogout(): void {
        this._authService.logout();
        this._router.navigate(['/auth/login']);
    }
}
