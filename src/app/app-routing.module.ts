import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { PRIVATE_ROUTES, PUBLIC_ROUTES, WILDCARD_ROUTE } from '@router/index';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [...PUBLIC_ROUTES, ...PRIVATE_ROUTES, WILDCARD_ROUTE],
      {
        preloadingStrategy: PreloadAllModules,
      },
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
