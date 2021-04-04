import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FORGOT_PASSWORD_EMAIL_SENT_ROUTE } from './forgot-password-email-sent.page.route';

@Component({
  templateUrl: './forgot-password-email-sent.page.html',
  styleUrls: ['./forgot-password-email-sent.page.scss'],
})
export class ForgotPasswordEmailSentPage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [ForgotPasswordEmailSentPage],
  imports: [
    CommonModule,
    RouterModule.forChild([FORGOT_PASSWORD_EMAIL_SENT_ROUTE]),
  ],
})
export class ForgotPasswordEmailSentModule {}
