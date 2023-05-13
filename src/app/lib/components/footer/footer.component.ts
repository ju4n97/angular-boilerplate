import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PACKAGE_JSON, providePackageJson } from '@lib/providers';
import { LogoComponent } from '../logo/logo.component';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule, RouterModule, LogoComponent],
    providers: [providePackageJson()],
    templateUrl: './footer.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
    readonly packageJson = inject(PACKAGE_JSON);
    readonly currentYear = new Date().getFullYear();
}
