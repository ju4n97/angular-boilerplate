import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MY_PROFILE_ROUTE } from './pages/my-profile/my-profile.page.route';
import { USERS_OVERVIEW_ROUTE } from './pages/overview/overview.page.route';

const routes: Routes = [MY_PROFILE_ROUTE, USERS_OVERVIEW_ROUTE];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
