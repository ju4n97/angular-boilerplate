import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { REPOSITORY_URL } from '@lib/constants';
import { LogoComponent } from '../logo/logo.component';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule, RouterModule, LogoComponent],
    templateUrl: './footer.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
    readonly repositoryURL = REPOSITORY_URL;
    readonly currentYear = new Date().getFullYear();
}
