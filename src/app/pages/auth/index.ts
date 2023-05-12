import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        title: 'Login',
        loadComponent: async () => (await import('./login/login.component')).LoginComponent,
    },
    {
        path: 'register',
        title: 'Register',
        loadComponent: async () => (await import('./register/register.component')).RegisterComponent,
    },
];
