import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PasswordResetPage } from './password-reset.page';

@NgModule({
  declarations: [PasswordResetPage],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PasswordResetPage,
        data: {
          title: 'Enter your new password',
          robots: 'noindex, nofollow',
        },
      },
    ]),
  ],
})
export class PasswordResetModule {}
