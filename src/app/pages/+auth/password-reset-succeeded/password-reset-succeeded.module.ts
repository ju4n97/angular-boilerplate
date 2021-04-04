import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PasswordResetSucceededPage } from './password-reset-succeeded.page';

@NgModule({
  declarations: [PasswordResetSucceededPage],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PasswordResetSucceededPage,
        data: {
          title: 'Your password was restablished',
          robots: 'noindex, nofollow',
        },
      },
    ]),
  ],
})
export class PasswordResetSucceededModule {}
