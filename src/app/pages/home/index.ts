import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'Home',
        loadComponent: async () => (await import('./home.component')).HomeComponent,
    },
];
