import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PathMap } from './@core/enums/path-map.enum';
import { AuthGuard, NoAuthGuard } from './@core/guards';
import { NotFoundPage } from './public/pages/not-found/not-found.page';

const routes: Routes = [
  // ===== Uncomment if pathMap.Home is different from empty =====
  // { path: '', redirectTo: PathMap.Home, pathMatch: 'full' },

  // Public
  {
    path: '',
    loadChildren: () =>
      import('@public/public.module').then((m) => m.PublicModule),
  },

  // Auth
  {
    path: PathMap.Auth,
    canActivate: [NoAuthGuard],
    loadChildren: () =>
      import('@features/_auth/auth.module').then((m) => m.AuthModule),
  },

  // Dashboard
  {
    path: PathMap.Home,
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('@features/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },

  // Not found page (must go at the bottom)
  {
    path: '**',
    component: NotFoundPage,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
