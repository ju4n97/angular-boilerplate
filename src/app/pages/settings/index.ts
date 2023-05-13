import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'accessibility',
        title: 'Accessibility settings',
        loadComponent: async () => (await import('./accessibility/accessibility.component')).AccessibilityComponent,
    },
    {
        path: 'account',
        title: 'Account settings',
        loadComponent: async () => (await import('./account/account.component')).AccountComponent,
    },
    {
        path: 'appearance',
        title: 'Appearance settings',
        loadComponent: async () => (await import('./appearance/appearance.component')).AppearanceComponent,
    },
];
