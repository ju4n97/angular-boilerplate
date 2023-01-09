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
    loadChildren: async () => (await import('@pages/auth/auth.routes')).ROUTES,
    canLoad: [authGuard({ requiresAuthentication: false })],
  },
  {
    path: 'home',
    loadChildren: async () => (await import('@pages/home/home.routes')).ROUTES,
    canLoad: [authGuard()],
  },
  {
    path: 'profile/:username',
    loadChildren: async () => (await import('@pages/profile/profile.routes')).ROUTES,
    canLoad: [authGuard()],
  },
  {
    path: 'settings',
    loadChildren: async () => (await import('@pages/settings/settings.routes')).ROUTES,
    canLoad: [authGuard()],
  },
  {
    path: '**',
    loadComponent: async () =>
      (await import('@pages/screens/not-found/not-found.component')).NotFoundComponent,
  },
];
