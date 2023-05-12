import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@lib/services';

@Component({
    standalone: true,
    imports: [CommonModule],
    templateUrl: './login.component.html',
})
export class LoginComponent {
    private readonly router = inject(Router);
    private readonly activatedRoute = inject(ActivatedRoute);
    private readonly authService = inject(AuthService);

    login(): void {
        this.authService.login();

        this.router.navigate([
            this.activatedRoute.snapshot.queryParamMap.get('returnUrl') ?? `/`,
        ]);
    }
}
