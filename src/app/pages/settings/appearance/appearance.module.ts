import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppearancePage } from './appearance.page';

@NgModule({
  declarations: [AppearancePage],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AppearancePage,
        data: {
          title: 'Appearance settings',
          robots: 'noindex, nofollow',
        },
      },
    ]),
  ],
})
export class AppearanceModule {}
