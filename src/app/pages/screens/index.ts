import { Routes } from '@angular/router';

export * from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: '**',
        loadComponent: async () => (await import('@pages/screens/not-found/not-found.component')).NotFoundComponent,
    },
];
