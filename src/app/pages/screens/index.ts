import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '**',
        loadComponent: async () => (await import('@pages/screens/not-found/not-found.component')).NotFoundComponent,
    },
];
