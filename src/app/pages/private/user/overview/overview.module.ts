import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OverviewPage } from './overview.page';

@NgModule({
  declarations: [OverviewPage],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: OverviewPage,
        data: {
          title: 'Users overview',
          robots: 'noindex, nofollow',
        },
      },
    ]),
  ],
})
export class OverviewModule {}
