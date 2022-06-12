import { Routes } from '@angular/router';
import { AuthGuard, NoAuthGuard } from '@core/guards';

export const routes: Routes = [
  {
    path: '',
    loadChildren: async () => (await import('@pages/auth/auth.routes')).ROUTES,
    canLoad: [NoAuthGuard],
  },
  {
    path: 'dashboard',
    loadComponent: async () =>
      (await import('@pages/home/home.module')).HomeModule,
    canLoad: [AuthGuard],
  },
  {
    path: 'settings',
    loadComponent: async () =>
      (await import('@pages/settings/settings.module')).SettingsModule,
    canLoad: [AuthGuard],
  },
  {
    path: 'user',
    loadComponent: async () =>
      (await import('@pages/user/user.module')).UserModule,
    canLoad: [AuthGuard],
  },
  // {
  //   path: '**',
  //   loadComponent: async () =>
  //     (await import('@lib/components/screens/not-found/not-found-component'))
  //       .NotFoundComponent,
  //   component: NotFoundPage,
  // },
];
