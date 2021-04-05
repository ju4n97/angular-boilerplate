import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardPage } from './dashboard.page';

@NgModule({
  declarations: [DashboardPage],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardPage,
        data: {
          title: 'Dashboard',
          robots: 'noindex, nofollow',
        },
      },
    ]),
  ],
})
export class DashboardModule {}
