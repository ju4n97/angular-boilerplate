import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PasswordResetFailedPage } from './password-reset-failed.page';

@NgModule({
  declarations: [PasswordResetFailedPage],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PasswordResetFailedPage,
        data: {
          title: 'Password reset failed',
          robots: 'noindex, nofollow',
        },
      },
    ]),
  ],
})
export class PasswordResetFailedModule {}
