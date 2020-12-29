import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Path } from './@core/enums/path.enum';
import { AuthGuard, NoAuthGuard } from './@core/guards';

const routes: Routes = [
  // ===== Uncomment if Path.Home is different from empty =====
  // { path: '', redirectTo: Path.Home, pathMatch: 'full' },

  // Public
  {
    path: Path.Home,
    loadChildren: () =>
      import('./@containers/home/home.module').then((m) => m.HomeModule),
  },

  // Auth
  {
    path: Path.Auth,
    canActivate: [NoAuthGuard],
    loadChildren: () => import('./+auth/auth.module').then((m) => m.AuthModule),
  },

  // App
  {
    path: Path.App,
    redirectTo: `${Path.App}/${Path.Dashboard}`,
    pathMatch: 'full',
  },
  {
    path: Path.App,
    canActivate: [AuthGuard],
    children: [
      // {
      //   path: Path.Dashboard,
      //   loadChildren: () =>
      //     import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      // },
    ],
  },

  // Not found page (must go at the bottom)
  {
    path: '**',
    loadChildren: () =>
      import('./@containers/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
