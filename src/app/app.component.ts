import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '@lib/services';
import { TranslocoModule } from '@ngneat/transloco';
import { LayoutHorizontalComponent } from './lib/components/layouts/layout-horizontal/layout-horizontal.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterModule, LayoutHorizontalComponent, TranslocoModule],
    templateUrl: './app.component.html',
})
export class AppComponent {
    private readonly _authService = inject(AuthService);

    isAuthenticated = this._authService.isAuthenticated;
}
