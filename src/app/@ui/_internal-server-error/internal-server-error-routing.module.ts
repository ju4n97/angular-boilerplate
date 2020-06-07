import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternalServerErrorPage } from './pages/internal-server-error/internal-server-error.page';

const routes: Routes = [{ path: '', component: InternalServerErrorPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InternalServerErrorRoutingModule {}
