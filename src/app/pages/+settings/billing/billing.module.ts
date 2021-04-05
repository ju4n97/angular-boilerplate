import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BillingPage } from './billing.page';

@NgModule({
  declarations: [BillingPage],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: BillingPage,
        data: {
          title: 'Billing settings',
          robots: 'noindex, nofollow',
        },
      },
    ]),
  ],
})
export class BillingModule {}
