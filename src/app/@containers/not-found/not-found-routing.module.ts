import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NOT_FOUND_ROUTE } from './not-found.page.route';

const routes: Routes = [NOT_FOUND_ROUTE];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotFoundRoutingModule {}
