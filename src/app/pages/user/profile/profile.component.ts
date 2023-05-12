import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    standalone: true,
    imports: [CommonModule],
    templateUrl: './profile.component.html',
})
export class ProfileComponent {
    @Input() username!: string;
}
