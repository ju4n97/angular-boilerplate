import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PathMap } from './@core/enums/path-map.enum';

const routes: Routes = [
  // ===== Uncomment if pathMap.Home is different from empty =====
  // { path: '', redirectTo: PathMap.Home, pathMatch: 'full' },

  // Home page
  {
    path: PathMap.Home,
    loadChildren: () =>
      import('@features/home/home.module').then((m) => m.HomeModule),
  },

  // Auth
  {
    path: PathMap.Auth,
    loadChildren: () =>
      import('@app/@auth/auth.module').then((m) => m.AuthModule),
  },

  // Internal server error page response
  {
    path: 'internal-server-error',
    loadChildren: () =>
      import('@ui/_internal-server-error/internal-server-error.module').then(
        (m) => m.InternalServerErrorModule
      ),
  },

  // Not found page (must go at the bottom)
  {
    path: '**',
    loadChildren: () =>
      import('@ui/_not-found/not-found.module').then((m) => m.NotFoundModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
