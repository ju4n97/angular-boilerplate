import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccountPage } from './account.page';

@NgModule({
  declarations: [AccountPage],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AccountPage,
        data: {
          title: 'Account settings',
          robots: 'noindex, nofollow',
        },
      },
    ]),
  ],
})
export class AccountModule {}
