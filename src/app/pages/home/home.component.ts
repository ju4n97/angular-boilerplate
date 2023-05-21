import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { provideI18nInlineLoader } from '@lib/i18n';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
    standalone: true,
    imports: [CommonModule, RouterModule, TranslocoModule],
    providers: [
        provideI18nInlineLoader((lang) => import(`./i18n/${lang}.json`), {
            scope: 'pages/home',
            alias: 'home',
        }),
    ],
    templateUrl: './home.component.html',
})
export class HomeComponent {}
