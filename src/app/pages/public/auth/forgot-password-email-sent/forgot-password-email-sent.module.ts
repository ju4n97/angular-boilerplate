import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ForgotPasswordEmailSentPage } from './forgot-password-email-sent.page';

@NgModule({
  declarations: [ForgotPasswordEmailSentPage],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ForgotPasswordEmailSentPage,
        data: {
          title: 'We have sent you an email with instructions',
          robots: 'noindex, nofollow',
        },
      },
    ]),
  ],
})
export class ForgotPasswordEmailSentModule {}
