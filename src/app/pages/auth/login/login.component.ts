import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@lib/services';

@Component({
    standalone: true,
    imports: [CommonModule],
    templateUrl: './login.component.html',
})
export class LoginComponent {
    @Input() returnUrl!: string;

    private readonly router = inject(Router);
    private readonly authService = inject(AuthService);

    login(): void {
        this.authService.login();

        this.router.navigate([this.returnUrl ?? `/`]);
    }
}
