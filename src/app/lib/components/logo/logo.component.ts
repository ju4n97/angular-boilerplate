import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-logo',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './logo.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {}
