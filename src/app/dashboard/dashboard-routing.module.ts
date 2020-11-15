import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DASHBOARD_ROUTE } from './pages/dashboard/dashboard.page.route';

const routes: Routes = [DASHBOARD_ROUTE];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
