import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

  // Not found page (must go at the bottom)
  {
    path: '**',
    loadChildren: () =>
      import('@ui/responses/responses.module').then((m) => m.ResponsesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
