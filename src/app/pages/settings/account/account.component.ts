import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthService } from '@lib/services';

@Component({
    standalone: true,
    imports: [CommonModule],
    templateUrl: './account.component.html',
})
export class AccountComponent {
    private readonly _authService = inject(AuthService);

    session = this._authService.session;
}
