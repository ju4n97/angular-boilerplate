import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'Profile',
        loadComponent: async () => (await import('./profile/profile.component')).ProfileComponent,
    },
];
