import { Routes } from '@angular/router';
import { authGuard } from '@lib/guards';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: async () => (await import('@pages/auth')).routes,
        canMatch: [authGuard({ requiresAuthentication: false })],
    },
    {
        path: '',
        title: 'Home',
        loadComponent: async () => (await import('@pages/home')).HomeComponent,
        canMatch: [authGuard()],
    },
    {
        path: 'users/:username',
        loadChildren: async () => (await import('@pages/user')).routes,
        canMatch: [authGuard()],
    },
    {
        path: 'settings',
        loadChildren: async () => (await import('@pages/settings')).routes,
        canMatch: [authGuard()],
    },
    {
        path: '**',
        loadComponent: async () => (await import('@pages/screens')).NotFoundComponent,
    },
];
