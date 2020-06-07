import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPage } from './not-found/not-found.page';

const routes: Routes = [
  {
    path: '',
    component: NotFoundPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResponsesRoutingModule {}
