import { Route } from '@angular/router';

export const ROUTES: Route[] = [
  {
    path: 'login',
    title: 'Login',
    loadComponent: async () => (await import('./login/login.page')).LoginPage,
  },
  {
    path: 'register',
    title: 'Register',
    loadComponent: async () => (await import('./register/register.page')).RegisterPage,
  },
];
