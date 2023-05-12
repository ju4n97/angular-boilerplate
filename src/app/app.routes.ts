import { Routes } from '@angular/router';
import { authGuard } from '@lib/guards';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'auth',
        loadChildren: async () =>
            (await import('@pages/auth/auth.routes')).ROUTES,
        canMatch: [authGuard({ requiresAuthentication: false })],
    },
    {
        path: 'home',
        loadChildren: async () =>
            (await import('@pages/home/home.routes')).ROUTES,
        canMatch: [authGuard()],
    },
    {
        path: 'profile/:username',
        loadChildren: async () =>
            (await import('@pages/profile/profile.routes')).ROUTES,
        canMatch: [authGuard()],
    },
    {
        path: 'settings',
        loadChildren: async () =>
            (await import('@pages/settings/settings.routes')).ROUTES,
        canMatch: [authGuard()],
    },
    {
        path: '**',
        loadComponent: async () =>
            (await import('@pages/screens/not-found/not-found.component'))
                .NotFoundComponent,
    },
];
