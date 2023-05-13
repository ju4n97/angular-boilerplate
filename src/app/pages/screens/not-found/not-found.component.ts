import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './not-found.component.html',
})
export class NotFoundComponent {}
