import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HOME_ROUTE } from './pages/home/home.page.route';
import { INTERNAL_SERVER_ERROR_ROUTE } from './pages/internal-server-error/internal-server-error.page.route';
import { NOT_FOUND_ROUTE } from './pages/not-found/not-found.page.route';

const routes: Routes = [
  HOME_ROUTE,
  INTERNAL_SERVER_ERROR_ROUTE,
  NOT_FOUND_ROUTE,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
